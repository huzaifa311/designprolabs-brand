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

    <section class="w-[95%] sm:w-[73%] 2xl:w-[1500px] mx-auto sm:py-32 pt-48">
      <h1 class="sm:text-5xl text-4xl font-bold text-center">
        Congrats, <span id="companyName" class="text-[#FE5F00] whitespace-nowrap"></span> logo is<br> almost ready! 😊
      </h1>
      <p class="text-center text-[14px] mt-3">
      Please fill in the following details to recieve your logo.
      </p>
      <div class="mt-8 space-y-4 flex flex-col">
      <input
        id="name"
        type="text"
        class="md:w-[70%] w-[80%] border-[#d7d7d7] border-[2px] rounded-lg mx-auto py-[14px] px-[15px] focus:outline-[#FE5F00]"
        required
        placeholder="Please Enter Your Name"
        name="name"
      />
      <input
        id="email"
        type="text"
        class="md:w-[70%] w-[80%] border-[#d7d7d7] border-[2px] rounded-lg mx-auto py-[14px] px-[15px] focus:outline-[#FE5F00]"
        required
        placeholder="Please Enter Your Email"
        name="email"
      />
      <input
        id="phone"
        type="text"
        class="md:w-[70%] w-[80%] border-[#d7d7d7] border-[2px] rounded-lg mx-auto py-[14px] px-[15px] focus:outline-[#FE5F00]"
        required
        placeholder="Please Enter Your Phone Number"
        name="phone"
      />
      </div>
    </section>
    <div
      class="fixed z-50 bottom-0 left-0 w-full py-4 flex justify-center customBorder bg-white"
    >
      <button
        id="submitBtn"
        class="text-lg font-semibold text-white bg-[#FE5F00] py-[12px] px-10 flex items-center gap-2"
      >
        Submit
      </button>
    </div>
    <script src="../assets/js/personal_info.js"></script>
  </body>
</html>
