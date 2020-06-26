//basic synthax to start jQuerry 
//$(document).ready  means it only starts after the document has been loaded
$(document).ready(function() {
    /*
    $('h1').click(function() {
        $(this).css('background-color', '#ff0000') //"this" means here the h1 elements
    })*/





    /********
     * building STICKY NAV
     */

    /*waypoint - see index included website*/
    $('.js--section-features').waypoint(function(direction) { //direction is understading if the browers is scrolling down
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        } 
        
    }, {
        offset: '70px' /* transition will happen 60px BEFORE section*/
    });




    /********
     * Scroll on buttons
     */

     $('.js--scroll-to-plan').click(function() {
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000) /*1000 ms for the effect*/
     });

     $('.js--scroll-to-start').click(function(){
         $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
     });




     /********
     * Navigation scroll
     */

    /*Snippets copied from https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
    /*don't change anything, just add the correct href in the nav and related id in the sections */

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
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
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


    /********
     * Animations on scroll -- used with waypoint
     */

    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset:'50%'
    });


    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeIn');
    }, {
        offset:'50%'
    });


    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInUp');
    }, {
        offset:'50%'
    });


    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset:'50%'
    });


    /********
     * Mobile navigation
     */
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        show = nav.slideToggle(200); /*Here, we select the the class to toggle it with 200ms response time */

        //const base = `<ion-icon name="menu-outline" class="mobile-icon"></ion-icon>`;
        //const markup = `<ion-icon name="close-outline" class="mobile-icon></ion-icon>`;

        /*const el = document.querySelector('.mobile-icon').parentElement;
        if (el) {
            el.parentNode.removeChild(el);
            nav.parentNode.insertAdjacentHTML('afterbegin', `<ion-icon name="close-outline" class="mobile-icon"></ion-icon>`);
        };*/
    });
    


})