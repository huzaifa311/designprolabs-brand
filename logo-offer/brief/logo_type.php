<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="../assets/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="../assets/css/styles-1.css" />
    <link rel="stylesheet" href="../assets/css/style-web-1.css" />
    <link rel="stylesheet" href="../assets/css/responsive-1.css" />
    <script src="https://cdn.tailwindcss.com"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />

    <title>Design Pro Labs | Special Offer</title>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
      integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
  </head>

  <body class="hompg">
    <header class="header123 navbar-shrink">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <a href="../" class="logo md:pl-14 pl-2">
              <img
                src="../assets/images/logo-white.png"
                alt=""
                class="logo-main md:ml-8"
              />
              <img
                src="../assets/images/logo.png"
                alt=""
                class="logo-fixed md:ml-8"
              />
            </a>
            <div class="desk-menu"><i class="fa fa-bars"></i></div>
          </div>
          <div class="col-md-9">
            <div class="menu">
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#pricingSection">Packages</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#testimonial">Testimonial</a></li>
                <li class="num">
                  <a href="tel:+17379103666"
                    ><i class="fa fa-phone"></i> +1 (737) 910-3666</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="menu-left">
        <div class="menu-lover"></div>
        <div class="menu-linn">
          <div class="menu-lclose"><i class="fa fa-times"></i></div>
          <div class="main-menu">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#pricingSection">Packages</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#testimonial">Testimonial</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <section class="w-[90%] sm:w-[85%] 2xl:w-[1500px] mx-auto py-36">
      <h1 class="text-4xl font-bold text-center">
      Which Logo Type Are You Looking For?
      </h1>
      <p class="text-center text-[13px] mt-2">
      Please select the best logo type towards the final step
      </p>
      <div class="flex justify-center mt-6">
        <div class="flex flex-wrap justify-center items-center gap-x-32 gap-y-14">
          <div class="space-y-2 cursor-pointer step-box">
            <div
              class="bg-white shadow rounded-full w-48 h-48 whitespace-nowrap flex justify-center items-center mx-auto step-inner"
            >
              <img
                src="../assets/images/stepForm/logoType/abstract.png"
                alt=""
                class="w-full h-full rounded-full"
              />
            </div>
            <p class="text-center text-[14px] leading-[1.4] font-semibold">Abstract & Combination
            </p>
          </div>
          <div class="space-y-2 cursor-pointer step-box">
            <div
              class="bg-white shadow rounded-full w-48 h-48 whitespace-nowrap flex justify-center items-center mx-auto step-inner"
            >
              <img
                src="../assets/images/stepForm/logoType/calligraphy.png"
                alt=""
                class="w-full h-full rounded-full"
              />
            </div>
            <p class="text-center text-[14px] leading-[1.4] font-semibold">Calligraphy & Handwritten

            </p>
          </div>
          <div class="space-y-2 cursor-pointer step-box">
            <div
              class="bg-white shadow rounded-full w-48 h-48 whitespace-nowrap flex justify-center items-center mx-auto step-inner"
            >
              <img
                src="../assets/images/stepForm/logoType/emblem.png"
                alt=""
                class="w-full h-full rounded-full"
              />
            </div>
            <p class="text-center text-[14px] leading-[1.4] font-semibold">Emblem & Crest
            </p>
          </div>
          <div class="space-y-2 cursor-pointer step-box">
            <div
              class="bg-white shadow rounded-full w-48 h-48 whitespace-nowrap flex justify-center items-center mx-auto step-inner"
            >
              <img
                src="../assets/images/stepForm/logoType/lettermark.png"
                alt=""
                class="w-full h-full rounded-full"
              />
            </div>
            <p class="text-center text-[14px] leading-[1.4] font-semibold">Lettermark & Initials

            </p>
          </div>
          <div class="space-y-2 cursor-pointer step-box">
            <div
              class="bg-white shadow rounded-full w-48 h-48 whitespace-nowrap flex justify-center items-center mx-auto step-inner"
            >
              <img
                src="../assets/images/stepForm/logoType/pictorial.png"
                alt=""
                class="w-full h-full rounded-full"
              />
            </div>
            <p class="text-center text-[14px] leading-[1.4] font-semibold">Pictorial & Icon
            </p>
          </div>
        </div>
      </div>
    </section>
    <div
      class="fixed z-50 bottom-0 left-0 w-full py-4 flex justify-center customBorder bg-white"
    >
      <button
        id="skipBtn"
        class="text-lg font-semibold text-white bg-[#FE5F00] py-[10px] px-10 flex items-center gap-2"
      >
        <span id="skipText">Skip</span>
        <img src="../assets/images/arrowForward.png" alt="arrowForward" />
      </button>
    </div>
    <script src="../assets/js/logo_type.js"></script>
  </body>
</html>
