$(function () {
  let hidden = $("#hidden");
  $("#show-more").on("click", function () {
    hidden.toggleClass("block");

    hidden.slideToggle();

    if (hidden.hasClass("block")) {
      $(this).html("Mostrar menos");
    } else {
      $(this).html("Mostrar mas");
    }
  });

  $('[data-toggle="counter-up"]').counterUp({ delay: 10, time: 15e2 });
});
