
// Скрипт для выпадающего списка в шапке
const params = {
    btnClassName: "drop-box__btn-item",
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
  }
  
  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(params.disabledClassName, params.activeClassName);
      evt.target.removeEventListener("animationend", onDisable);
    }
  }
  
  function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(`.${params.activeClassName}`);
  
      if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }
  
      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.path;
        const drop = document.querySelector(`[data-target="${path}"]`);
  
        btn.classList.toggle(params.activeClassName);
  
        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
  }
  
  setMenuListener();

  // Скрипт для слайдера в Hero
  const swiperHero = new Swiper('.hero__swiper', {
    // Optional parameters
    direction: 'horizontal',
    allowTouchMove: false,
    loop: true,
    speed: 1000,
    effect: 'fade',
    autoplay: {
      delay: 10000,
    }
  });


  // Плавный переход по якорным ссылкам
  const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


// Бургер
let burgerBtn = document.querySelector('.hd-top__btn-burger');
let burgerMenu = document.querySelector('.burger');

burgerBtn.addEventListener('click', function(){
  burgerBtn.classList.toggle('active');
  burgerMenu.classList.toggle('active');
})

// Открытие формы поиска для экранов ниже 768px
let searchBtn = document.querySelector('.search__btn-open-form');
let searchForm = document.querySelector('.hd-top__form');
let searchCloseBtn = document.querySelector('.search__btn-close-form');
let serachInput = document.querySelector('.search__input--top');

searchBtn.addEventListener('click', function(){
  searchBtn.classList.toggle('hidden');
  searchForm.classList.toggle('active');
  searchCloseBtn.classList.toggle('active');
  serachInput.classList.toggle('active');
})

searchCloseBtn.addEventListener('click', function(){
  searchBtn.classList.toggle('hidden');
  searchForm.classList.toggle('active');
  searchCloseBtn.classList.toggle('active');
  serachInput.classList.toggle('active');
})









