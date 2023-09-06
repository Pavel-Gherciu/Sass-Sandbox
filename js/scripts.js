console.log("Lucreaza");

// const section = document.getElementById('section-slider');

$('.js-toggle-example').on("click", function(e) {
  // e.preventDefault face ca click-ul pe <a href="google.com"> sa nu va duca pe google 
  // ci sa ramaneti pe loc, ea anuleaza comportamentul implicit al elementelor
  e.preventDefault();
  $('.section-slider').toggleClass('clasa-noua');
});

$(document).ready(function(){
  $(".your-class").slick({
    infinite: true,
    slidestoShow: 2,
    slidestoScroll: 1,
    dots: true,
    fade: true,
  });
});