$('.autoplay').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed:0,
  speed: 2000,
  easing: 'linear',
  useTransform :false,
  waitForAnimate: true,
  dots: false,
  arrows: false,
  draggable:false,
  pauseOnHover: false,
  pauseOnFocus:false,
  responsive: [
  {
    breakpoint: 1900,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed:0,
      speed: 2000,
      easing: 'linear',
      useTransform :false,
      waitForAnimate: true,
      dots: false,
      arrows: false,
      draggable:false,
      pauseOnHover: false,
      pauseOnFocus:false,
    }
  },
  ],
});


$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});