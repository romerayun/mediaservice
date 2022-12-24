import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

const Swal = require('sweetalert2');
global.$ = global.jQuery = require('jquery');
require('select2');
import * as FilePond from 'filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import {DataTable} from "../extensions/simple-datatables";

FilePond.registerPlugin(FilePondPluginImagePreview);


function getSum() {
    let sum = 0;
    let series = [];
    let labels = [];
    let labelsMonth = [];
    let pie = [];
    $('#plan-table tr td').each(function (index) {
        if (index === 3) {
            sum += +$(this).text().slice(0, -5);
            series.push(+$(this).text().slice(0, -5));
        } else if (index % 5 === 3) {
            sum += +$(this).text().slice(0, -5);
            series.push(+$(this).text().slice(0, -5));
        }

        if (index === 2) {
            labels.push($(this).text());
        } else if (index % 5 === 2) {
            labels.push($(this).text());
        }

        if (index === 1) {
            labelsMonth.push($(this).text());
        } else if (index % 5 === 1) {
            labelsMonth.push($(this).text());
        }

    });

    pie.push(series);
    pie.push(labels);
    pie.push(sum);
    pie.push(labelsMonth);


    return pie;

}


const inputElement = document.querySelector('#filepond');
const pond = FilePond.create(inputElement, {
    'labelIdle': 'Перетащите свои файлы в эту область или <span class="filepond--label-action"> Нажмите сюда </span>',
    credits: false,
    server: {
        url: '/upload-filepond',
        headers: {
            'X-CSRF-TOKEN': $('input[name="_token"]').val()
        }
    }
});


new AirDatepicker('.datepicker', {
    isMobile: true,
    autoClose: true,
    timepicker: true,
    minDate: $.now(),
    altFieldDateFormat: 'yyyy-MM-dd HH:mm:00',
    altField: '#deadline'
});

if (document.getElementById('deadlineClaim-datepicker')) {
    new AirDatepicker('.deadlineClaim', {
        isMobile: true,
        autoClose: true,
        timepicker: true,
        minDate: $.now(),
        altFieldDateFormat: 'yyyy-MM-dd HH:mm:00',
        altField: '#deadlineClaim'
    });
}

if (document.getElementById('datepicker-range')) {
    new AirDatepicker('.datepicker-range', {
        isMobile: true,
        autoClose: true,
        range: true,
        dynamicRange: true,
        multipleDatesSeparator: ' | ',
        minDate: $.now(),
        altFieldDateFormat: 'yyyy-MM-dd',
        altField: '#period-range'
    });
}

if (document.getElementById('month-datepicker')) {
    let monthDatepicker = new AirDatepicker('.month-datepicker', {
        isMobile: true,
        autoClose: true,
        view: 'months',
        minView: 'months',
        dateFormat: 'MMMM yyyy',
        altFieldDateFormat: 'yyyy-MM-01',
        altField: '#month'
    });
}


let selector = '.sidebar-menu ul.menu .sidebar-item';
let fullUrl = window.location.href;
var url = new URL(fullUrl);

let currentUrl = url.pathname.split('/');


if (url.pathname.split('/')[1] === '') {
    url = url.origin;
} else {
    url = url.origin + '/' + url.pathname.split('/')[1];
}


$(selector).each(function () {
    if ($(this).find('a').attr('href') === url) {
        $(selector).removeClass('active');
        $(this).removeClass('active').addClass('active');
    }
});


if (document.getElementById('phone')) {
    var elPhone = document.getElementById('phone');
    var maskOptions = {
        mask: '+{7}(000)000-00-00',
        lazy: false
    };
    var mask = IMask(elPhone, maskOptions);
}

if (document.getElementById('date_of_birth')) {
    var dateMask = IMask(
        document.getElementById('date_of_birth'),
        {
            mask: Date,
            blocks: {
                d: {
                    mask: IMask.MaskedRange,
                    from: 1,
                    to: 31,
                    maxLength: 2,
                },
                m: {
                    mask: IMask.MaskedRange,
                    from: 1,
                    to: 12,
                    maxLength: 2,
                },
                Y: {
                    mask: IMask.MaskedRange,
                    from: 1800,
                    to: 9999,
                }
            },
        });
}


$(document).on("click", ".delete", function (event) {
    var form = $(this).closest("form");
    event.preventDefault();
    Swal.fire({
        title: 'Вы действительно хотите удалить запись? 🥺',
        text: "Данное действие может привести к потери данных!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#31ce36',
        cancelButtonColor: '#f25961',
        confirmButtonText: 'Удалить',
        cancelButtonText: 'Отмена',
    }).then((result) => {
        if (result.isConfirmed) {
            form.submit();
        }
    })
});

$('.js-example-basic-single').select2();

if (!currentUrl.includes('services') && !currentUrl.includes('edit') && !currentUrl.includes('distribution-claims')) {
    $("#user_id").select2({
        'disabled': true,
    });
}


$("form").submit(function (event) {
    $(".overlay-spinner").addClass('show');
});

$("#group_id").change(function () {
    if ($(this).find(':selected').val() !== '') {
        let value = $(this).find(':selected').val();
        let _token = $('input[name="_token"]').val();

        $.ajax({
            url: "/get-users-by-group",
            method: "POST",
            data: {
                'value': value,
                '_token': _token,
            },
            success: function (result) {
                $("#user_id").html(result);
                $("#user_id").removeAttr('disabled');
                $('#user_id').select2()
            },

        });
    }

});

$("#group_idS").change(function () {
    if ($(this).find(':selected').val() !== '') {
        let value = $(this).find(':selected').val();
        let _token = $('input[name="_token"]').val();

        $.ajax({
            url: "/get-services-by-group",
            method: "POST",
            data: {
                'value': value,
                '_token': _token,
            },
            success: function (result) {
                $(".service-group").html(result);
                $(".service-group").removeAttr('disabled');
                $('.service-group').select2();
            },

        });
    }

});

function dNone(block) {
    if ($(block).hasClass('d-none')) {
        $(block).removeClass('d-none');
    } else {
        $(block).addClass('d-none');
    }
}

function dNoneAll() {
    if (!$('.package-block').hasClass('d-none')) {
        $('.package-block').addClass('d-none');
    }
    if (!$('.period-block').hasClass('d-none')) {
        $('.period-block').addClass('d-none');
    }
    if (!$('.brif-block').hasClass('d-none')) {
        $('.brif-block').addClass('d-none');
    }
    if (!$('.output-block').hasClass('d-none')) {
        $('.output-block').addClass('d-none');
    }
    if (!$('.material-block').hasClass('d-none')) {
        $('.material-block').addClass('d-none');
    }
}

$(".service-group").change(function () {
    dNoneAll();
    if ($(this).find(':selected').val() !== '') {
        let value = $(this).find(':selected').val();
        let _token = $('input[name="_token"]').val();

        $.ajax({
            url: "/get-package-by-service",
            method: "POST",
            data: {
                'value': value,
                '_token': _token,
            },
            success: function (result) {
                result = JSON.parse(result);

                if (result.service.isPeriod) {
                    dNone('.period-block');
                }
                if (result.service.isPackage) {
                    dNone('.package-block');
                }
                if (result.service.isBrif) {
                    dNone('.brif-block');
                }
                if (result.service.isOutput) {
                    dNone('.output-block');
                }
                if (result.service.isRequiredMaterial) {
                    dNone('.material-block');
                }

                $(".service-package").html(result.html);
                $(".service-package").removeAttr('disabled');
                $('.service-package').select2();
            },

        });
    }

});


$("input[type=checkbox]").change(function () {

    let nameCheckbox = $(this).attr('name');
    nameCheckbox = nameCheckbox.slice(0, -1);
    let currentVal = +$(this).prop('checked');

    $('input[name=' + nameCheckbox + ']').val(currentVal);

});

$("#goal").change(function () {
    let goalS = $('.goal-section');
    if (goalS.hasClass('show')) {
        goalS.removeClass('show');
    } else {
        goalS.addClass('show');
    }
});

$("#isMySelfC").change(function () {
    let goalS = $('.user-form');
    if (goalS.hasClass('show')) {
        goalS.removeClass('show');
    } else {
        goalS.addClass('show');
    }
});


$("#isInvoiceC").change(function () {
    // invoice-block

    let goalS = $('.invoice-block');
    if (goalS.hasClass('d-none')) {
        goalS.removeClass('d-none');
    } else {
        goalS.addClass('d-none');
    }
});

$(".btn-collapse").click(function () {

    let btn = $(this);
    let icon = btn.find('i');

    if (icon.hasClass('bi-caret-down-fill')) {
        icon.removeClass('bi-caret-down-fill');
        icon.addClass('bi-caret-up-fill');
    } else {
        icon.removeClass('bi-caret-up-fill');
        icon.addClass('bi-caret-down-fill');
    }


});


$(document).on("click", ".download-zip", function (e) {
    let value = $(this).attr('attr-id');
    let _token = $('input[name="_token"]').val();
    $.ajax({
        url: "/zip-download",
        method: "POST",
        data: {
            'id': value,
            '_token': _token,
        },
        success: function (result) {
            e.preventDefault();
            window.location.href = result;
        },
    });
});


if (document.getElementById('plan-table')) {

    var options = {
        series: getSum()[0],
        chart: {
            width: '100%',
            type: 'pie',
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 1,
            colors: ["#35354f"]
        },
        toolbar: {
            show: true,
        },
        fill: {
            type: 'gradient',
        },
        labels: getSum()[3],
    };
    var chart = new ApexCharts(document.querySelector("#bar"), options);
    chart.render();

    let planTable = new simpleDatatables.DataTable("#plan-table", {
        searchable: true,
        fixedHeight: false,
        labels: {
            placeholder: "Поиск...",
            perPage: "{select} записей на странице",
            noRows: "Ничего не найдено",
            info: "Показано с {start} по {end} из {rows} записей",
        },
    });


    planTable.on("datatable.init", function () {
        adaptPageDropdown(planTable)
        adaptPagination(planTable)
    });

    planTable.on("datatable.page", adaptPagination);


    if (document.getElementById('filter-month')) {
        let monthDatepicker = new AirDatepicker('.filter-month', {
            isMobile: true,
            autoClose: true,
            view: 'months',
            minView: 'months',
            dateFormat: 'MMMM yyyy',
            onSelect: function onSelect(fd, date, inst) {
                planTable.search(fd.formattedDate);
                planTable.draw;
                $("#sum").text(getSum()[2]);

                chart.updateOptions({
                    series: getSum()[0],
                    labels: getSum()[1],
                });
            }
        });
    }

    $("#sum").text(getSum()[2]);


}


$(document).on("click", ".changeStatus", function (event) {
    let id = $(this).attr('attr-id');
    $('#claim_id').val(id);
});


// $(document).ready(function () {
//
//     let myTable = $('#myTable').DataTable({
//         processing: true,
//         serverSide: true,
//         ajax: {
//             url: '/plan/statisticsAjax',
//             type: 'get',
//         },
//         columns: [
//             {data: 'id'},
//             {data: 'month'}
//             // {data: 'phone', name: 'phone'},
//             // {data: 'dob', name: 'dob'}
//         ],
//     });
//
//     myTable.on("datatable.init", function () {
//         // adaptPageDropdown(myTable)
//         // adaptPagination(myTable)
//     });
//
//     myTable.on("datatable.page", adaptPagination);
// });


if (document.getElementById('plan-statistics')) {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let paramMonth = urlParams.get('month');

    var options = {
        chart: {
            width: '100%',
            type: 'pie',
        },
        series: [],
        noData: {
            text: 'Данные загружаются...',
            style: {
                color: '#FFC107',
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 1,
            colors: ["#35354f"]
        },
        toolbar: {
            show: true,
        },
        fill: {
            type: 'gradient',
        },
        labels: [],
    }

    var chart = new ApexCharts(
        document.querySelector("#plan-statistics"),
        options
    );

    chart.render();

    var url = '/plan/statistics/remoteData';

    $.getJSON(url, {month: paramMonth}, function (response) {
        if (response.data.length === 0) {
            chart.updateOptions({
                noData: {
                    text: 'Данные о поступлениях не найдены!',
                    style: {
                        color: '#DC3545',
                    }
                },
            });
        } else {
            chart.updateOptions({
                series: response.data,
                labels: response.labels
            });
        }


    });
}

if (document.getElementById('month-f')) {
    let monthDatepicker = new AirDatepicker('.month-f', {
        isMobile: true,
        autoClose: true,
        view: 'months',
        minView: 'months',
        dateFormat: 'MMMM yyyy',
        altFieldDateFormat: 'yyyy-MM',
        altField: '#month',
        onSelect: function onSelect(fd, date, inst) {
            planTable.search(fd.formattedDate);
            planTable.draw;
            $("#sum").text(getSum()[2]);

            chart.updateOptions({
                series: getSum()[0],
                labels: getSum()[1],
            });
        }
    });
}

if (document.getElementById('plan-user')) {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let paramMonth = urlParams.get('month');
    let id = $("#id_user").val();

    var options = {
        chart: {
            width: '100%',
            type: 'bar',
        },
        series: [],
        noData: {
            text: 'Данные загружаются...',
            style: {
                color: '#FFC107',
            }
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 1,
            colors: ["#35354f"]
        },
        toolbar: {
            show: true,
        },
        fill: {
            type: 'gradient',
        },
        labels: [],
    }

    var chart = new ApexCharts(
        document.querySelector("#plan-user"),
        options
    );

    chart.render();

    var url = '/users/remoteData';

    $.getJSON(url, {month: paramMonth, id: id}, function (response) {
        chart.updateOptions({
            series: [
                {
                    name: 'План',
                    data: response.plan
                },
                {
                    name: 'Заявки',
                    data: response.claims
                },
                {
                    name: 'Поступления',
                    data: response.paid
                }
            ],
            xaxis: {
                categories: ["Статистика продаж"]
            }
        });
    });
}
