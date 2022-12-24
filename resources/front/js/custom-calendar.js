import * as FilePond from "filepond";
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
const Swal = require('sweetalert2');


let goalFile = document.querySelector('#goalFiles');
const goalsFile = FilePond.create(goalFile, {
    'labelIdle': 'Перетащите свои файлы в эту область или <span class="filepond--label-action"> Нажмите сюда </span>',
    credits: false,
    allowMultiple: true,
    instantUpload: false,
    allowProcess: false,
});

function showToast(text, color) {
    Toastify({
        text: text,
        duration: 2000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: color,
    }).showToast();
}

let startDatePicker = new AirDatepicker('#start-date-datepicker', {
    timepicker: true,
    inline: true,
    altFieldDateFormat: 'yyyy-MM-dd',
    altField: '#start-date-hidden',
    onSelect: function onSelect(fd, date, inst) {
        let dateSelected = fd.date;
        let dtstartString = dateSelected.getFullYear() + ('0' + (dateSelected.getMonth()+1)).slice(-2) + ('0' + dateSelected.getDate()).slice(-2);
        let timeStartString = 'T' + ('0' + dateSelected.getHours()).slice(-2) + '' + ('0' + dateSelected.getMinutes()).slice(-2) + '00Z';

        $("#start-date-hidden").val(dtstartString + timeStartString);
    }
});

let endDatePicker = new AirDatepicker('#end-date-datepicker', {
    inline: true,
    timepicker: true,
    // startDate:
});

let endDatePickerModal = new AirDatepicker('#end-date', {
    isMobile: true,
    autoClose: true,
    dateFormat: 'dd.MM.YYYY',
    onSelect: function onSelect(fd, date, inst) {
        let dateSelected = fd.date;
        let dtEndString = dateSelected.getFullYear() + ('0' + (dateSelected.getMonth()+1)).slice(-2) + ('0' + dateSelected.getDate()).slice(-2);
        let timeEndString = 'T' + ('0' + dateSelected.getHours()).slice(-2) + '' + ('0' + dateSelected.getMinutes()).slice(-2) + '00Z';

        $("#end-date-hidden").val(dtEndString + timeEndString);
    }
});

$("#repeatGoalC").change(function (event) {

    if ($("#recurring").hasClass('d-none')) {
        $("#recurring").removeClass('d-none');
    } else {
        $("#recurring").addClass('d-none');
    }
});


document.addEventListener('DOMContentLoaded', function () {


    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('input[name="_token"]').val()
        }
    });

    var calendarEl = document.getElementById('calendar');
    var url = '/calendar/getGoals';
    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'ru',
        firstDay: 1,
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        eventDidMount: function(info) {
            var tooltip = new Tooltip(info.el, {
                title: info.event.extendedProps.exposed,
                placement: 'top',
                trigger: 'hover',
                container: '#calendar'
            });
        },
        events: url,
        eventTimeFormat: {
            hour: '2-digit',
            minute: '2-digit',
            meridiem: false
        },
        nowIndicator: true,
        displayEventEnd: true,
        dayMaxEventRows: true,
        selectable: true,
        selectMirror: true,
        select: function (start) {
            // const rruleSet = new RRuleSet();
            // rruleSet.rrule(
            //     new RRule({
            //         freq: RRule.MONTHLY,
            //         count: 5,
            //         dtstart: datetime(2012, 2, 1, 10, 30),
            //     })
            // )
            // console.log(rruleSet);
            // return;
            $('#createGoal').modal('toggle');

            if (calendar.view.type === 'dayGridMonth') {
                endDatePicker.selectDate(moment(moment(start.end).subtract(1, 'days')).add(1, 'h'), {
                    updateTime: true
                });
            } else {
                endDatePicker.selectDate(start.end, {
                    updateTime: true
                });
            }

            let checked = 0;
            startDatePicker.selectDate(start.start, {
                updateTime: true
            });


            document.getElementById("allDayC").addEventListener("change", function () {
                if (this.checked == true) {
                    startDatePicker.update({
                        timepicker: false,
                    });
                    endDatePicker.update({
                        timepicker: false,
                    });
                    checked = 1;
                } else {
                    startDatePicker.update({
                        timepicker: true,
                    });
                    endDatePicker.update({
                        timepicker: true,
                    });
                    checked = 0;
                }
            });


            document.getElementById("saveG").onclick = function () {

                let start_date, end_date;

                if (checked) {
                    start_date = moment(startDatePicker.selectedDates[0]).format('YYYY-MM-DD 00:00:00');
                    end_date = moment(moment(endDatePicker.selectedDates[0]).add(1, 'days')).format('YYYY-MM-DD 00:00:00');
                } else {
                    start_date = moment(startDatePicker.selectedDates[0]).format('YYYY-MM-DD HH:mm:ss');
                    end_date = moment(endDatePicker.selectedDates[0]).format('YYYY-MM-DD HH:mm:ss');
                }

                if (end_date < start_date) {
                    showToast("Дата конца задачи не может быть меньше начала", "linear-gradient(to right, #ED213A, #93291E)");
                    return;
                }

                let isMySelf = $("input[name='isMySelf']").val();
                let user_id = $("#user_id").val();
                let color = $("#color").val();
                let rrule = $("#rrule").val();


                if (color == '#ffffff') {
                    showToast("Белый цвет запрещен 😢", "linear-gradient(to right, #ED213A, #93291E)");
                    return;
                }

                let text = $("#text").val();
                let fd = new FormData();
                let pondFiles = goalsFile.getFiles();
                if (pondFiles.length > 0) {
                    for (var i = 0; i < pondFiles.length; i++) {
                        fd.append('filepond[]', pondFiles[i].file);
                    }
                }

                fd.append('isMySelf', isMySelf);
                fd.append('deadline', end_date);
                fd.append('start_date', start_date);
                fd.append('user_id', user_id);
                fd.append('text', text);
                fd.append('color', color);
                fd.append('allDay', checked);
                fd.append('rrule', rrule);

                $.ajax({
                    url: '/goals',
                    type: "POST",
                    contentType: false,
                    processData: false,
                    cache: false,
                    data: fd,
                    success: function (response) {
                        console.log(response);
                        $('#createGoal').modal('toggle');
                        $('#newGoal').trigger('reset');
                        $('.user-form').addClass('show');
                        $("input[name='isMySelf']").val(0);
                        if (isMySelf == 1) {
                            // calendar.addEvent({
                            //     'id': response.goal.id,
                            //     'title': response.goal.text,
                            //     'start': response.goal.start_date,
                            //     'end': response.goal.deadline,
                            //     'exposed' : 'Создал задачу: ' + response.user,
                            //     'backgroundColor': response.goal.color,
                            //     'borderColor': response.goal.color,
                            //     'display': 'block',
                            //     'allDay': Boolean(+response.goal.allDay),
                            //     'rrule' : response.goal.rrule,
                            // });
                            calendar.refetchEvents()
                        } else {
                            showToast("Задача успешно создана 👌", "linear-gradient(to right, #00B560, #00914D)");
                        }
                        calendar.unselect();
                    },
                    error: function (error) {
                        if (error.responseJSON.errors) {
                            $("#userError").html(error.responseJSON.errors.user_id);
                            $("#textError").html(error.responseJSON.errors.text);
                        }
                    },

                });
            };

        },
        editable: true,
        eventDrop: function (info) {
            let id = info.event.id;

            let start_date;
            let end_date;

            if (info.event.allDay) {
                start_date = moment(info.event.start).format('YYYY-MM-DD');
                end_date = moment(info.event.end).format('YYYY-MM-DD');
            } else {
                start_date = moment(info.event.start).format('YYYY-MM-DD HH:mm:ss');
                end_date = moment(info.event.end).format('YYYY-MM-DD HH:mm:ss');
            }


            $.ajax({
                url: '/calendar/goal-update/' + id,
                type: "PATCH",
                data: {
                    'start_date': start_date,
                    'deadline': end_date,
                },
                success: function (response) {
                    showToast("Задача успешно обновлена 👌", "linear-gradient(to right, #00B560, #00914D)");
                },
                error: function (error) {
                    showToast("При обновлении задачи, произошла ошибка 😢", "linear-gradient(to right, #ED213A, #93291E)");
                },

            });
        },
        eventClick: function (info) {
            // $('#viewGoal').modal('toggle');
            let id = info.event.id;
            $.ajax({
                url: '/calendar/getGoal/' + id,
                type: "GET",
                success: function (response) {

                    $("#idGoal").html(response.id);
                    $("#textGoal").html(response.title);
                    $("#startGoal").html(moment(response.start).format('DD.MM.YYYY г. / HH:mm'));
                    $("#endGoal").html(moment(response.end).format('DD.MM.YYYY г. / HH:mm'));
                    $("#exposedGoal").html(response.exposed);
                    $("#userGoal").html(response.user);
                    $("#clientGoal").html(response.client);
                    if (response.files == 0) {
                        $("#files").html("<span class='text-danger'>Файлы не были загружены</span>")
                    } else {
                        $("#files").html("<a class='btn btn-success download-zip mt-2' attr-id='"+response.id+"'>Скачать</a>")
                    }
                    if (response.status != 0) {
                        $("#status-goal").html("Выполнено");
                        if ($("#status-goal").hasClass('bg-danger')) {
                            $("#status-goal").removeClass('bg-danger');
                            $("#status-goal").addClass('bg-success');
                        }
                        $("#completeGoal").attr('disabled', 'disabled');
                        $("#completeGoal").addClass('disabled');
                    } else {
                        $("#status-goal").html("Не выполнено");
                        if ($("#status-goal").hasClass('bg-success')) {
                            $("#status-goal").removeClass('bg-success');
                            $("#status-goal").addClass('bg-danger');
                        }
                        $("#completeGoal").removeAttr('disabled');
                        if ($("#completeGoal").hasClass('disabled')) {
                            $("#completeGoal").removeClass('disabled');
                        }
                    }
                    $(".action-goal").each(function(index) {
                        $(this).attr('attr-id', response.id);
                    });
                    $('#viewGoal').modal('toggle');
                },
                error: function (error) {
                    showToast("Неожиданная ошибка, при просмотре задачи. Обратитесь к администратору 😢", "linear-gradient(to right, #ED213A, #93291E)");
                },

            });

            document.getElementById("deleteGoal").onclick = function () {
                Swal.fire({
                    title: 'Вы действительно хотите удалить задачу? 🥺',
                    text: "Данное действие невозможно отменить!",
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#31ce36',
                    cancelButtonColor: '#f25961',
                    confirmButtonText: 'Удалить',
                    cancelButtonText: 'Отмена',
                }).then((result) => {
                    if (result.isConfirmed) {
                        let id = $(this).attr('attr-id');
                        $.ajax({
                            url: '/calendar/goal-delete/' + id,
                            type: "DELETE",
                            success: function (response) {
                                info.event.remove();
                                $('#viewGoal').modal('toggle');
                                showToast("Задача успешно удалена 👌", "linear-gradient(to right, #00B560, #00914D)");
                            },
                            error: function (error) {
                                showToast(error.responseJSON.error, "linear-gradient(to right, #ED213A, #93291E)");
                            },

                        });
                    }
                })
            }

            document.getElementById("completeGoal").onclick = function () {
                let id = $(this).attr('attr-id');
                $.ajax({
                    url: '/goals/complete/' + id,
                    type: "POST",
                    success: function (response) {
                        showToast("Задача успешно обновлена 👌", "linear-gradient(to right, #00B560, #00914D)");
                        $("#status-goal").html("Выполнено");
                        if ($("#status-goal").hasClass('bg-danger')) {
                            $("#status-goal").removeClass('bg-danger');
                            $("#status-goal").addClass('bg-success');
                        }
                        $("#completeGoal").attr('disabled', 'disabled');
                        $("#completeGoal").addClass('disabled');
                    },
                    error: function (error) {
                        showToast("При обновлении задачи, произошла ошибка 😢", "linear-gradient(to right, #ED213A, #93291E)");
                    },

                });
            }

        },
        eventResizableFromStart: true,
        eventDurationEditable: true,
        eventResize: function (info) {
            let id = info.event.id;
            let start_date = moment(info.event.start).format('YYYY-MM-DD HH:mm:ss');
            let end_date = moment(info.event.end).format('YYYY-MM-DD HH:mm:ss');
            $.ajax({
                url: '/calendar/goal-update/' + id,
                type: "PATCH",
                data: {
                    'start_date': start_date,
                    'deadline': end_date,
                },
                success: function (response) {
                    showToast("Задача успешно обновлена 👌", "linear-gradient(to right, #00B560, #00914D)");
                },
                error: function (error) {
                    showToast("При обновлении задачи, произошла ошибка 😢", "linear-gradient(to right, #ED213A, #93291E)");
                },

            });
        }
    });

    calendar.render();
});

