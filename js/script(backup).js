
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



//  Скрипт инициализации библиотеки SimpleBar с параметрами для скроллбара
const scrollBar1 = new SimpleBar(document.getElementById('bar-1'), {
    scrollbarMaxSize: 28,
});
const scrollBar2 = new SimpleBar(document.getElementById('bar-2'), {
    scrollbarMaxSize: 28,
});
const scrollBar3 = new SimpleBar(document.getElementById('bar-3'), {
    scrollbarMaxSize: 28,
});
const scrollBar4 = new SimpleBar(document.getElementById('bar-4'), {
    scrollbarMaxSize: 28,
});
const scrollBar5 = new SimpleBar(document.getElementById('bar-5'), {
    scrollbarMaxSize: 28,
});




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
let searchBtn = document.querySelector('.hd-top__btn-open-form');
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




// Переназначем значение атрибута
// let simplebarLabel = document.querySelector(".simplebar-content-wrapper");

// simplebarLabel.setAttribute("aria-label", "Прокручиваемый список художников");



// let focusLink = document.querySelectorALL('.catalog__menu-link');


// focusLink.addEventListener('focus', function(){
//   focusLink.classList.toggle('focus');
    
// })

//событие фокус
// focusLink.addEventListener('focus', function(event){
//   let focus = event.target;
//   target.classList.add('focus');
// });


const linkList = [...document.querySelectorAll(".my__link")];
let focusLink;

for (const el of linkList) {
  el.addEventListener("focus", e => {
    focusLink && focusLink.classList.remove("focus");
    focusLink = e.target;
    e.target.classList.add("focus");
  });
}


