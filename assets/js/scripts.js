$(document).ready(function(){

    $('.sub>li>a').on('click', function(){
        
        //Capturar el atributo del anchore
        var atributo = $(this).attr('href');
        console.log('btn'+atributo);
        //.stop() = Detiene la ejecución de las animaciones
        $('body, html').stop().animate({
            scrollTop: $(atributo).offset().top
        }, 1000, 'easeOutQuart');
        
        // $('.flecha').click(function(){
        //     $('body, html').animate({
        //     scrollTop: '0px'
        // }, 1500, 'easeInOutQuart');
        //     });
        });

})