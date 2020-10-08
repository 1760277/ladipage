$(document).ready(function () {
  $(".slide").slick({
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow:
      "<div class='slide__prev'><img src='assets/images/slide-arrow-right.png'/></div> ",
    prevArrow:
      "<div class='slide__next'><img src='assets/images/slide-arrow-left.png'/></div>",
  });
});
