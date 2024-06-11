
$(document).ready(function () {
  // <!-- PARTNERS SLICK SLIDER STARTS HERE  -->
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        setting: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        setting: {
          slidesToShow: 3,
        },
      },
    ],
  });
  // <!-- PARTNERS SLICK SLIDER ENDS HERE  -->
  const subscription = document.getElementById('subscribe-btn');
  const emailInput = document.getElementById('email-input');

  subscription.addEventListener('click', () => {
    const email = emailInput.value;
    console.log(`Subscribing email: ${email}`);
    window.location.href = "./public/subscribe.html";
  })

  // GO-TO-TOP
  const goToTopBtn = document.getElementById('go-to-top');

window.addEventListener('scroll', function() {
  // Show/hide button based on scroll position
  if (window.scrollY > 100) { // Show button if scrolled more than 100px
    goToTopBtn.style.display = 'block';
  } else {
    goToTopBtn.style.display = 'none';
  }
});

goToTopBtn.addEventListener('click', function() {
  // Scroll to the top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

});
