$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('#whatsapp').fadeIn();
        } else {
            $('#whatsapp').fadeOut();
        }
    });
});