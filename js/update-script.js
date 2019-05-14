$(document).ready(function(){


    //Скрываем меню при скролле
    var currentScroll = $(window).scrollTop();
    function fixedHeader(){
        var newScroll = $(window).scrollTop();

        console.log(newScroll);

        if (newScroll > 300) {
            console.log("Прокрутили более 300px");
            $('.mobile-menu-section').addClass('hide');
        } else {
            $('.mobile-menu-section').removeClass('hide');
        }

        if (newScroll < currentScroll) {
            $('.mobile-menu-section').addClass('show');
        } else if (newScroll > currentScroll) {
            $('.mobile-menu-section').removeClass('show');
        }

        currentScroll = newScroll;
    }

    $(window).on('scroll', function(){
        fixedHeader();
    });







    function toggleMenu() {
        if ($('body').hasClass('open-menu')) {
            $('body').removeClass('open-menu');
            $('.mobile-menu').removeClass('open');
        } else {
            $('body').addClass('open-menu');
            $('.mobile-menu').addClass('open');
        }
    }

    $('#menu_button').on('click', function(){
        //console.log('Мы в обработчике клика по кнопке меню');
        toggleMenu();
        //return false;
    });

    $('.mobile-category').on('click', function(){
        if($(this).hasClass('open')){
            $(this).removeClass('open');

            $(this).siblings('.mobile-sub-menu').removeClass('open');
        }
        else{
            $('.mobile-sub-menu').removeClass('open');
            $('.mobile-category').removeClass('open');
            $(this).addClass('open');
            $(this).siblings('.mobile-sub-menu').addClass('open');
        }
    });


});



