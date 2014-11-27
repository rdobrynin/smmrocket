var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
$(window).on("load", function() {
    if (pixelRatio > 1) {
//        $('#top-chest').attr('src', $('#top-chest').attr('src').replace(".png","@2x.png"));
        $('body').addClass('retina');
    }
});
$(function () {

    $('#right-account > li > a').click(function() {
        $('li').removeClass();
        $(this).parent().addClass('active');
    });

    $( "#login, #login_switch" ).click(function() {
        $('#loginModal').modal('show');
    });

    $( "#register" ).click(function() {
        $('#registerModal').modal('show');
    });

    $( "#start_prom" ).click(function() {
        $('#myModal').modal('show');
    });

    $( "#login_switch" ).click(function() {
        $('#myModal').modal('hide');
        $('#loginModal').modal('show');
    });

    $( "#register_switch" ).click(function() {
        $('#myModal').modal('hide');
        $('#registerModal').modal('show');
    });





    var $validator_login = $("#loginForm").validate({
        errorClass: 'help-block',
        rules: {
            'password': {
                required: true
            },
            'usernameLogin': {
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');

        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    var $validator_register = $("#registerForm").validate({
        errorClass: 'help-block',
        rules: {
            'first_name': {
                required: true
            },
            'last_name': {
                required: true
            },
            'email': {
                required: true,
                email: true
            },
            'password_reg': {
                required: true,
                minlength: 6
            },
            'password_confirmation': {
                required: true,
                equalTo: "#password_reg"
            },
            'usernameLogin': {
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');

        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    $( ".btn-login-submit" ).click(function() {



        var formData = $("#loginForm").serializeArray();
        var URL = 'login.php';
        $.post(URL,
            formData,
            function(data, textStatus, jqXHR) {
                console.log(data);
            }).fail(function(jqXHR, textStatus, errorThrown) {

            });
    });

    $('.selectpicker').selectpicker();

});