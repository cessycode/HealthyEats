$(document).ready(function() {

    /* for sticky-nav impt: waypoint is a plug-in */
    $('.js--section-about').waypoint(function(direction) {
        if(direction == "down"){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        /* sets the distance when class 'sticky' is activated */
        offset: '60px'
    });


    /**** ANIMATE ON SCROLL ****/
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });


    /*  NAVIGATION & BUTTON Scrolls */

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ){
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
            // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('nav, html, body').animate({
                    scrollTop: target.offset().top - 60
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                    } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                    };
                });
            }
        }
    });


    /* Mobile Navi */
    $('.js--mobile-nav').click(function() {
        var main = $('.js--main-nav');
        var icon = $('.js--mobile-nav i');

        main.slideToggle(200);

        if (icon.hasClass('ion-md-menu')){
            icon.addClass('ion-md-close');
            icon.removeClass('ion-md-menu');
        } else {
            icon.addClass('ion-md-menu');
            icon.removeClass('icon ion-md-close');
        }
    });

});

/* scroll to top of page when page is refreshed or reloaded */
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
