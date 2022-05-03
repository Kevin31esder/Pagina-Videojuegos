$(function () {
  let preloader = $("#preloader");

  if (preloader.length) {
    preloader.delay(800).fadeOut("slow", function () {
      $(this).remove();
    });
  }

  let arrow = $("#top");

  let win = $(window);

  arrow.on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
  });

  win.on("scroll", function () {
    if (win.scrollTop() >= $(".news").offset().top) {
      arrow.fadeIn("slow");
    } else {
      arrow.fadeOut("slow");
    }
  });

  $(".responsive-nav-icon button").on("click", function () {
    $(".responsive-nav").toggleClass("open");
  });

  let responsiveNav = document.querySelector(".responsive-nav");
  let responsiveNavIcon = document.querySelector(
    ".responsive-nav-icon button i"
  );

  document.addEventListener("click", function (e) {
    if (e.target !== responsiveNav && e.target !== responsiveNavIcon) {
      if (responsiveNav.classList.contains("open")) {
        responsiveNav.classList.remove("open");
      }
    }
  });

  $(".responsive-nav").on("click", function (e) {
    e.stopPropagation();
  });

  AOS.init({ duration: 1e3, once: !0 });

  let currentDate = new Date();

  document.getElementById("footer-copyright-year").innerHTML = String(
    currentDate.getFullYear()
  );
});
