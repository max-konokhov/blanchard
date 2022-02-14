(() => {


  tippy('.js-btn-tooltip', {
    theme: 'Blanchard',
    maxWidth: 264,
  });

    const projectsSlider = new Swiper(".js-partners-slider", {
        speed: 400,
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
          nextEl: ".projects__btn-nav--next",
          prevEl: ".projects__btn-nav--prev",
        },

          // Responsive breakpoints
        breakpoints: {

          // when window width is >= 600px
          601: {
            slidesPerView: 2,
            spaceBetween: 15,
            slidesPerGroup: 2,
          },

          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2,
          },

          // when window width is >= 1024px
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
            slidesPerGroup: 2,
          },

          // when window width is >= 1400px
          1281: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
          },



        },



    });


})();
