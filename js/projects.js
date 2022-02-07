(() => {

    const btnTooltip = document.querySelectorAll('.btn-tooltip');

    btnTooltip.forEach((btn) => {
        btn.addEventListener('click', function () {
            btn.classList.toggle('is-active');
        });
    });




    let projectsSlider = new Swiper(".p-swiper", {
        speed: 400,
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
          nextEl: ".projects__btn-nav--next",
          prevEl: ".projects__btn-nav--prev",
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
            slidesPerView: 2,
            spaceBetween: 50,
            slidesPerGroup: 2,
          },

          // when window width is >= 1300px
          1400: {
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