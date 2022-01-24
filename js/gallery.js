(() => {

    let gallerySlider = new Swiper(".g-swiper-box", {
        slidesPerView: 1,
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
          slidesPerView: 1,
          spaceBetween: 15,
          slidesPerGroup: 1,
        },

        // when window width is >= 500px
        500: {
          slidesPerView: 2,
          spaceBetween: 15,
          slidesPerGroup: 2,
        },

        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 38,
          slidesPerGroup: 2,
        },

        // when window width is >= 1024px
        1024: {
          slidesPerView: 2,
          spaceBetween: 34,
          slidesPerGroup: 2,
        },

        // when window width is >= 1301px
        1301: {
          slidesPerView: 3,
          spaceBetween: 50,
          slidesPerGroup: 3
        },
        
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

      // Скрипт на модальное окно

  // const btns = document.querySelectorAll('.btn');
//   const modalBtns = document.querySelectorAll('.g-swiper__link-slide');
//   const modalOverlay = document.querySelector('.modal-overlay ');
//   const modals = document.querySelectorAll('.modal');

  
//     modalBtns.forEach((el) => {
// 	el.addEventListener('click', (e) => {
// 		let path = e.currentTarget.getAttribute('data-path');

// 		modals.forEach((el) => {
// 			el.classList.remove('modal--visible');
// 		});

// 		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
// 		modalOverlay.classList.add('modal-overlay--visible');
// 	});
// });

// modalOverlay.addEventListener('click', (e) => {
// 	console.log(e.target);

// 	if (e.target == modalOverlay) {
// 		modalOverlay.classList.remove('modal-overlay--visible');
// 		modals.forEach((el) => {
// 			el.classList.remove('modal--visible');
// 		});
// 	}
// });



  // Скрипт на модальное окно в галерее
  const modalBtn = document.querySelectorAll('.g-swiper__link-slide');
  const modalBtnClose = document.querySelector('.g-popup__btn-close');
  const modalWrap = document.querySelector('.g-popup__wrap');
  const modalBox = document.querySelectorAll('.g-popup__modal');

    
    

    modalBtn.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modalBox.forEach((el) => {
			el.classList.remove('g-popup__modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('g-popup__modal--visible');
		modalWrap.classList.add('g-popup__wrap--visible');
	});
});

  // Закрываю попап по кнопке закрыть через удаление класса
    modalBtnClose.addEventListener('click', function(){
    modalWrap.classList.remove('g-popup__wrap--visible');
  })  

  // Закрываю попап для клика по обвертке через удаление класса
modalWrap.addEventListener('click', (e) => {
	// console.log(e.target);

	if (e.target == modalWrap) {
		modalWrap.classList.remove('g-popup__wrap--visible');
		modalBox.forEach((el) => {
			el.classList.remove('g-popup__modal--visible');
		});
	}

});


  
})();