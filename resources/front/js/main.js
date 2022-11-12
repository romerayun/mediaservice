const Swal = require('sweetalert2');
global.$ = global.jQuery = require('jquery');
require('select2');

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


$('.delete').click(function(event) {
    var form =  $(this).closest("form");
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


$("form").submit(function( event ) {
    alert( "Handler for .submit() called." );
});
