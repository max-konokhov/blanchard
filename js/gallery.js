(() => {

    let gallerySlider = new Swiper(".g-swiper-box", {
        slidesPerView: 3,
        spaceBetween: 50,
        pagination: {
          el: ".g-swiper__pagination",
          type: "fraction"
        },
        navigation: {
          nextEl: ".g-swiper__btn-nav--next",
          prevEl: ".g-swiper__btn-nav--prev",
          // disabledClass: ".g-swiper__btn-nav--disabled",
          // disabledClass: ".green"
        },
        
        
        // Responsive breakpoints
        breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 2,
        },

        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 2,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 2
        },
        // when window width is >= 1335px
        1335: {
          slidesPerView: 3,
          spaceBetween: 50,
          slidesPerGroup: 3,
        }
      },
    
        
        
        a11y: false,
        keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо
        
        // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми 
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slideVisibleClass: 'slide-visible',
        
        on: {
          init: function () {
            this.slides.forEach(slide => {
              if (!slide.classList.contains('slide-visible')) {
                slide.tabIndex = '-1';
              } else {
                slide.tabIndex = '';
              }
            });
          },
          slideChange: function () {
            this.slides.forEach(slide => {
              if (!slide.classList.contains('slide-visible')) {
                slide.tabIndex = '-1';
              } else {
                slide.tabIndex = '';
              }
            });
          }
        }
      
    
    
       
      });




})();