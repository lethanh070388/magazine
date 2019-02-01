$(function(){
    $(window).on('scroll', function() {
        var nav = $('.scrolling-navbar');
        if($(window).scrollTop()>30) {
            nav.addClass('bg-nav-scroll');
            $('.header-menu').hide(500);
        }
        else{
            nav.removeClass('bg-nav-scroll');
            $('.header-menu').show(500);
        }
    });
    $('.dropdown-menu button').on("click",function(){
        $(this).parent().prev().text($(this).text());
    });
    $('.navbar-nav .dropdown').on({
        'mouseenter': function(){
            $(this).toggleClass('show');
            $(this).find('.dropdown-menu').addClass('show');
        },
        'mouseleave': function(){
            $(this).toggleClass('show');
            $(this).find('.dropdown-menu').removeClass('show');
        }
    });

    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
        });
    }, false);

    $('.scroll-top').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },500);
    })
    
    $('.expand-icon-close').hide();
    $('.expand-button').click(function(){
        $('.expand-icon-close').toggle();
        $('.expand-icon-open').toggle();
    });
});