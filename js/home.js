$(function () {
  $("#explore").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $(".recent-games").offset().top,
      },
      800
    );
  });

  $('[data-toggle="counter-up"]').counterUp({ delay: 10, time: 15e2 });

  $(".like i").on("click", function () {
    if ($(this).attr("class") === "far fa-heart") {
      $(this).attr("class", "fas fa-heart");

      $(this).attr("style", "color: #ff20ae;");
    } else {
      $(this).attr("class", "far fa-heart");

      $(this).attr("style", "color: #000;");
    }
  });
});
