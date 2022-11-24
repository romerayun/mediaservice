const Swal = require('sweetalert2');
global.$ = global.jQuery = require('jquery');
require('select2');


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

if (!currentUrl.includes('services') && !currentUrl.includes('edit')) {
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


$("input[type=checkbox]").change(function () {

    let nameCheckbox = $(this).attr('name');
    nameCheckbox = nameCheckbox.slice(0, -1);
    let currentVal = +$(this).prop('checked');

    $('input[name=' + nameCheckbox + ']').val(currentVal);

});
