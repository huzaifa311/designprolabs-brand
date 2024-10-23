

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

new WOW().init();


$('#carouselFade').carousel();



$("#clients").owlCarousel({

    autoPlay: 3000, //Set AutoPlay to 3 seconds

    items: 5,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    itemsDesktopSmall: [900, 3], // betweem 900px and 601px
    itemsTablet: [600, 2],
    itemsMobile: [320, 2],
    transitionStyle: "fade"

});







$(document).ready(function () {
    $(".fancybox").fancybox();

});







// -------------------------------------------------------------
// ScrollBar Start
// -------------------------------------------------------------

jQuery(document).ready(function () {
    jQuery('.scrollbar-inner').scrollbar();
});
// -------------------------------------------------------------
// ScrollBar End
// -------------------------------------------------------------






const flagImage = document.getElementById('flagImage');

const countryFlags = {
    usa: 'https://www.logoverseinc.com/assets/images/flag/usa.png',  // Replace with actual paths to your flag images
    can: 'https://www.logoverseinc.com/assets/images/flag/can.png',
    uae: 'https://www.logoverseinc.com/assets/images/flag/uae.png',
    aus: 'https://www.logoverseinc.com/assets/images/flag/aus.png',
    uk: 'https://www.logoverseinc.com/assets/images/flag/uk.png',
    ire: 'https://www.logoverseinc.com/assets/images/flag/ire.png'
};

document.querySelectorAll('.countries span').forEach(span => {
    span.addEventListener('mouseover', function () {
        const country = this.getAttribute('data-flag');
        flagImage.src = countryFlags[country];
        flagImage.style.display = 'block';  // Show the flag
    });

    span.addEventListener('mouseout', function () {
        flagImage.style.display = 'none';  // Hide the flag
    });
});
