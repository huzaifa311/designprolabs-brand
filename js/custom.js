

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





let values = ["Home", "👋 Hi there! Looking for a website?"];
let index = 0;

setInterval(() => {
    document.title = values[index];

    index = (index + 1) % values.length;
}, 2000);
