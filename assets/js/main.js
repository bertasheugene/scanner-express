$(document).ready(function(){
    
    // Show password 
    $('.show-password').click(function(){
        if($('#form_password').attr('type') == 'password'){
            $('#form_password').attr('type', 'text');
        } else{
            $('#form_password').attr('type', 'password');
        }
    });
    // END Show password 

    // Checking for a completed input 
    $('.form__field').change(function(e){
        let field = e.target;
        if($(field).val() == ''){
            $(field).removeClass('form__field_blue');
            $(field).parent('.form__wrap').removeClass('form__field_blue');
        } else {
            $(field).addClass('form__field_blue');
            $(field).parent('.form__wrap').addClass('form__field_blue');
        }
    });
    // END Checking for a completed input 

    // Check form

    $('#form-create').submit(function(){

        let valueEmail = $('#form_email').val();
        let error = 0;
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        
        if(!valueEmail == ''){

            if(!regex.test(valueEmail)){
                error++;
                $('#form_email').addClass('form__field_error');
                $('#form_email_error').fadeIn().text('Wrong email format');
                $('.icon-error-email').fadeIn();
            } else {
                $('#form_email').removeClass('form__field_error');
                $('#form_email_error').fadeOut().text('');
                $('.icon-error-email').fadeOut();
            }

        } else {
            error++;
            $('#form_email').addClass('form__field_error');
            $('#form_email_error').fadeIn().text('Required');
            $('.icon-error-email').fadeIn();
        }

        let valuePassword = $('#form_password').val();
        if(!valuePassword == ''){
            $('#form_password').removeClass('form__field_error');
            $('#form_password_error').fadeOut().text('');
            $('.icon-error-password').fadeOut('fast');
            $('.show-password').fadeIn();
        } else {
            error++;
            $('#form_password').addClass('form__field_error');
            $('#form_password_error').fadeIn().text('Wrong login or password. Сheck the correctness of the entered data.');
            $('.icon-error-password').fadeIn();
            $('.show-password').fadeOut('fast');
        }

        if(!error){
            // ajax 
            return false;
        } else {
            return false;   
        }

    });

    // END Check form

    // Tariffs form
    $('.tariff').click(function(){
        if(!$(this).hasClass('tariffs-checked')){
            $('.tariff').removeClass('tariffs-checked');
            $('.tariff').find('.radio__input').prop('checked', false);
            $(this).addClass('tariffs-checked');
            $(this).find('.radio__input').prop('checked', true);
        }
    })

    $('#form-tariffs').submit(function(){
        return false;
    });
    // END Tariffs form

    // Checkbox ios
    
    // END checkbox ios


    // Form Reset
    $('#form-reset').submit(function(){
        return false;
    });
    // End Form Reset

    // Form Log-in
    $('#form-login').submit(function(){
        return false;
    });
    // END Form Log-in
    
});