(function ($) {
    "use strict";

    /*------------------------------------------
        = INVITE ENVELOPE OPENING HANDLER
    -------------------------------------------*/
    if ($("#invitation-envelope").length) {
        var $envelope = $("#invitation-envelope").find(".envelope-container");
        
        // 3D Parallax Tilt Effect on Hover
        $("#invitation-envelope").on("mousemove", function (e) {
            if ($envelope.hasClass("opened")) {
                $envelope.css("transform", "scale(1.03)");
                return;
            }
            var width = $(window).width();
            var height = $(window).height();
            var mouseX = e.pageX - width / 2;
            var mouseY = e.pageY - height / 2;
            
            // Limit tilt angle to max 8 degrees
            var tiltX = (mouseY / (height / 2)) * -8;
            var tiltY = (mouseX / (width / 2)) * 8;
            
            $envelope.css("transform", "rotateX(" + tiltX + "deg) rotateY(" + tiltY + "deg)");
        });
        
        $("#invitation-envelope").on("mouseleave", function () {
            if (!$envelope.hasClass("opened")) {
                $envelope.css("transform", "rotateX(0deg) rotateY(0deg)");
            }
        });
        
        // Envelope opening animation now handled by envelopeAnimation.js using GSAP for realistic effect
        // The original jQuery click handler has been removed to prevent conflict.
    }

    /*------------------------------------------
        = WOW ANIMATION INITIALIZATION
    -------------------------------------------*/
    if (typeof WOW !== "undefined") {
        new WOW().init();
    }

    /*------------------------------------------
        = HERO PARALLAX
    -------------------------------------------*/
    if ($("#scene").length && typeof $.fn.parallax !== "undefined") {
        $("#scene").parallax();
    }
    if ($("#scene-2").length && typeof $.fn.parallax !== "undefined") {
        $("#scene-2").parallax();
    }

    /*------------------------------------------
        = POPUP GMAPS
    -------------------------------------------*/
    if ($(".popup-gmaps").length) {
        $(".popup-gmaps").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }

    /*------------------------------------------
        = GALLERY CAROUSEL
    -------------------------------------------*/
    if ($(".portfolio-slide").length) {
        $(".portfolio-slide").owlCarousel({
            autoplay: true,
            loop: true,
            margin: 15,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                1200: {
                    items: 4,
                }
            }
        });
    }

    /*------------------------------------------
        = FANCYBOX ACTIVE
    -------------------------------------------*/
    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect: "elastic",
            closeEffect: "elastic",
            wrapCSS: "fancybox-custom",
            closeBtn: true,
            helpers: {
                title: {
                    type: "inside"
                },
                buttons: {}
            }
        });
    }

    /*------------------------------------------
        = RSVP FORM SUBMISSION MOCK
    -------------------------------------------*/
    if ($(".wpcf7-form").length) {
        $(".wpcf7-form").on("submit", function (e) {
            e.preventDefault();
            var $form = $(this);
            var $response = $form.find(".wpcf7-response-output");

            // Simple visual response
            $response.text("Processing...").css("color", "#666").show();

            setTimeout(function () {
                $response.text("Thank you! Your RSVP has been submitted successfully.")
                    .css("color", "green")
                    .show();
                $form[0].reset();
            }, 1000);
        });
    }

})(window.jQuery);
