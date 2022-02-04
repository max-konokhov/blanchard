(() => {

    let eventsSlider = new Swiper(".events__swiper", {
        speed: 400,
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
          nextEl: ".events__btn-nav--next",
          prevEl: ".events__btn-nav--prev",
        },

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          },

          // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
            slidesPerGroup: 1,
          },
  
          // when window width is >= 500px
          600: {
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
            slidesPerView: 3,
            spaceBetween: 27,
            slidesPerGroup: 3,
          },

          // when window width is >= 1300px
          1300: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
          },
  
        
          
        },


        // a11y: false,
        // keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо
        
        // // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми 
        // watchSlidesProgress: true,
        // watchSlidesVisibility: true,
        // slideVisibleClass: 'slide-visible',
        
        // on: {
        //   init: function () {
        //     this.slides.forEach(slide => {
        //       if (!slide.classList.contains('slide-visible')) {
        //         slide.tabIndex = '-1';
        //       } else {
        //         slide.tabIndex = '';
        //       }
        //     });
        //   },
        //   slideChange: function () {
        //     this.slides.forEach(slide => {
        //       if (!slide.classList.contains('slide-visible')) {
        //         slide.tabIndex = '-1';
        //       } else {
        //         slide.tabIndex = '';
        //       }
        //     });
        //   }
        // }
    });

})();