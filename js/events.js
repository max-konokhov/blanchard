(() => {

    let eventsSlider = new Swiper(".events__swiper", {
        speed: 400,
        slidesPerView: 3,
        spaceBetween: 50,
        
        // pagination: {
        //   el: ".g-swiper__pagination",
        //   type: "fraction"
        // },
        navigation: {
          nextEl: ".events__btn-nav--next",
          prevEl: ".events__btn-nav--prev",
          // disabledClass: ".g-swiper__btn-nav--disabled",
          // disabledClass: ".green"
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