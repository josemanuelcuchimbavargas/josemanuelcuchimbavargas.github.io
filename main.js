$(document).ready(function(){
    $('ul li a:first').addClass('activePersonalizado');
    $('#secciones section').hide();
    $('#secciones section:first').show();

    $('ul li a').click(function(){
        $('ul li a').removeClass('activePersonalizado');
        $(this).addClass('activePersonalizado');     
        $('#secciones section').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });

});