import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
const Swal = require('sweetalert2');
global.$ = global.jQuery = require('jquery');
require('select2');
import * as FilePond from 'filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
FilePond.registerPlugin(FilePondPluginImagePreview);



const inputElement = document.querySelector('#filepond');
const pond = FilePond.create(inputElement, {
    'labelIdle' : 'Перетащите свои файлы в эту область или <span class="filepond--label-action"> Нажмите сюда </span>',
    credits : false,
    server: {
        url : '/upload-filepond',
        headers: {
            'X-CSRF-TOKEN' : $('input[name="_token"]').val()
        }
    }
});

let goalFile = document.querySelector('#goalFiles');
const goalsFile = FilePond.create(goalFile, {
    'labelIdle' : 'Перетащите свои файлы в эту область или <span class="filepond--label-action"> Нажмите сюда </span>',
    credits : false,
    server: {
        url : '/upload-files-goal',
        headers: {
            'X-CSRF-TOKEN' : $('input[name="_token"]').val()
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


$('.delete').click(function (event) {
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
        'disabled' : true,
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

    if(icon.hasClass('bi-caret-down-fill')) {
        icon.removeClass('bi-caret-down-fill');
        icon.addClass('bi-caret-up-fill');
    } else {
        icon.removeClass('bi-caret-up-fill');
        icon.addClass('bi-caret-down-fill');
    }


});



