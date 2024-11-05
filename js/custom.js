var Tawk_API = Tawk_API || {},
Tawk_LoadStart = new Date();
(function () {
var s1 = document.createElement("script"),
  s0 = document.getElementsByTagName("script")[0];
s1.async = true;
s1.src = "https://embed.tawk.to/67293ec34304e3196add1144/1ibshqbi7";
s1.charset = "UTF-8";
s1.setAttribute("crossorigin", "*");
s0.parentNode.insertBefore(s1, s0);
})();

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

new WOW().init();

$("#carouselFade").carousel();

$("#clients").owlCarousel({
  autoPlay: 3000, //Set AutoPlay to 3 seconds

  items: 5,
  itemsDesktop: [1199, 3],
  itemsDesktopSmall: [979, 3],
  itemsDesktopSmall: [900, 3], // betweem 900px and 601px
  itemsTablet: [600, 2],
  itemsMobile: [320, 2],
  transitionStyle: "fade",
});

$(document).ready(function () {
  $(".fancybox").fancybox();
});

// -------------------------------------------------------------
// ScrollBar Start
// -------------------------------------------------------------

jQuery(document).ready(function () {
  jQuery(".scrollbar-inner").scrollbar();
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

document.addEventListener("DOMContentLoaded", function () {
  function toggleActiveClass() {
    const dropdowns = document.querySelectorAll("header .dropdown");

    const viewportWidth = window.innerWidth;

    if (viewportWidth >= 0 && viewportWidth <= 500) {
      dropdowns.forEach(function (dropdown) {
        dropdown.classList.add("active");
      });
    } else {
      dropdowns.forEach(function (dropdown) {
        dropdown.classList.remove("active");
      });
    }
  }

  toggleActiveClass();

  window.addEventListener("resize", toggleActiveClass);
});

// Get modal element
var modal = document.getElementById("orderModal");

// Get button that opens the modal
var btn = document.getElementById("orderBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("closeBtn");

// When the user clicks the button, open the modal
btn.addEventListener("click", function () {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function () {
  modal.style.display = "none";
});
// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});


function openTawkChat() {
  if (typeof Tawk_API !== "undefined") {
    Tawk_API.toggle();
  } else {
    console.error("Tawk.to API is not loaded yet.");
  }
}