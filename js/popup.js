
(() => {

	// Скрипт на модальное окно в галерее с отключение скролла у Body и отменой прыжка в начало

	const modalBtnOpen = document.querySelectorAll('.g-swiper__link-slide');
	const modalBtnClose = document.querySelectorAll('.g-popup__btn-close');
	const modalWrap = document.querySelector('.g-popup__wrap');
	const modalBox = document.querySelectorAll('.g-popup__modal');
	const body = document.body;


    let disableScroll = function () {
		let pagePosition = window.scrollY;
		document.body.classList.add('disable-scroll');
		document.body.dataset.position = pagePosition;
		document.body.style.top = -pagePosition + 'px';
	}
	
	let enableScroll = function () {
		let pagePosition = parseInt(document.body.dataset.position, 10);
		document.body.style.top = 'auto';
		document.body.classList.remove('disable-scroll');
		window.scroll({ top: pagePosition, left: 0 });
		document.body.removeAttribute('data-position');
	}
    
	modalBtnOpen.forEach((el) => {
		el.addEventListener('click', (e) => {
				
			let path = e.currentTarget.getAttribute('data-path');
			modalBox.forEach((el) => {
				el.classList.remove('g-popup__modal--visible');
			});
			
			document.querySelector(`[data-target="${path}"]`).classList.add('g-popup__modal--visible');
			modalWrap.classList.add('g-popup__wrap--visible');

			// отключаем скролл
			disableScroll();
		});
	});


	//   Закрываю попап по кнопке "закрыть" через удаление класса
    modalBtnClose.forEach((elem) => {
		elem.addEventListener('click', function(){
			modalWrap.classList.remove('g-popup__wrap--visible');

			// включаем скролл
			enableScroll();
		});
    });

	//   Закрываю попап на клик по обвертке через удаление класса
	modalWrap.addEventListener('click', (e) => {

		if (e.target == modalWrap) {
			modalWrap.classList.remove('g-popup__wrap--visible');
			modalBox.forEach((el) => {
				el.classList.remove('g-popup__modal--visible');
			});

			// включаем скролл
			enableScroll();		
		}
	});

	// const scrollBarWrap = new SimpleBar(document.querySelector('.g-popup__wrap'), {
    //     scrollbarMaxSize: 28,
    // });

})();