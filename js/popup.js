
(() => {


  // Скрипт на модальное окно в галерее
  const modalBtn = document.querySelectorAll('.g-swiper__link-slide');
  const modalBtnClose = document.querySelectorAll('.g-popup__btn-close');
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
    modalBtnClose.forEach((elem) => {
      elem.addEventListener('click', function(){
        modalWrap.classList.remove('g-popup__wrap--visible');
      });
    });

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