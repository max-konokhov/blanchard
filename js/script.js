document.addEventListener('DOMContentLoaded', function() {


  // здесь мы определяем функцию, которая отвеает за работу меню, в ней не нужно ничего менять
    function setBurger(params) {
        const btn = document.querySelector(`.${params.btnClass}`);
        const menu = document.querySelector(`.${params.menuClass}`);

        menu.addEventListener("animationend", function () {
            if (this.classList.contains(params.hiddenClass)) {
                this.classList.remove(params.activeClass);
                this.classList.remove(params.hiddenClass);
            }
        });

        btn.addEventListener("click", function () {
            this.classList.toggle(params.activeClass);

            if (
                !menu.classList.contains(params.activeClass) &&
                !menu.classList.contains(params.hiddenClass)
            ) {
                menu.classList.add(params.activeClass);
                document.body.style.overflow = 'hidden';
            } else {
                menu.classList.add(params.hiddenClass);
                document.body.removeAttribute('style');
            }
        });
    }

    // здесь мы вызываем функцию и передаем в нее классы наших элементов
    setBurger({
        btnClass: "burger", // класс бургера
        menuClass: "hd-top__menu-wrap", // класс меню
        activeClass: "is-opened", // класс открытого состояния
        hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
    });

    function setSearch(params) {
        const openBtn = document.querySelector(`.${params.openBtnClass}`);
        const search = document.querySelector(`.${params.searchClass}`);
        const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

        search.addEventListener("animationend", function (evt) {
            if (this._isOpened) {
                this.classList.remove(params.activeClass);
                this.classList.remove(params.hiddenClass);
                this._isOpened = false;
            } else {
                this._isOpened = true;
            }
        });

        search.addEventListener('click', function(evt) {
            evt._isSearch = true;
        });

        openBtn.addEventListener("click", function (evt) {
            this.disabled = true;
        if (
            !search.classList.contains(params.activeClass) &&
            !search.classList.contains(params.hiddenClass)
        ) {
            search.classList.add(params.activeClass);
        }
    });

    closeBtn.addEventListener('click', function () {
        openBtn.disabled = false;
        search.classList.add(params.hiddenClass);
    });

    document.body.addEventListener('click', function (evt) {
        if (!evt._isSearch && search._isOpened) {
            openBtn.disabled = false;
            search.classList.add(params.hiddenClass);
            }
    });
    }

    setSearch({
        openBtnClass: "hd-top__btn-open-search", // класс кнопки открытия
        closeBtnClass: "form-search__btn-close", // класс кнопки закрытия
        searchClass: "form-search", // класс формы поиска
        activeClass: "is-opened", // класс открытого состояния
        hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
    });













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
// let burgerBtn = document.querySelector('.hd-top__btn-burger');
// let burgerMenu = document.querySelector('.burger');

// burgerBtn.addEventListener('click', function(){
//     burgerBtn.classList.toggle('active');
//     burgerMenu.classList.toggle('active');
// })


// Открытие формы поиска для экранов ниже 768px
// let searchBtn = document.querySelector('.hd-top__btn-open-form');
// let searchForm = document.querySelector('.hd-top__form');
// let searchCloseBtn = document.querySelector('.search__btn-close-form');
// let serachInput = document.querySelector('.search__input--top');

// searchBtn.addEventListener('click', function(){
//     searchBtn.classList.toggle('hidden');
//     searchForm.classList.toggle('active');
//     searchCloseBtn.classList.toggle('active');
//     serachInput.classList.toggle('active');
// })

// searchCloseBtn.addEventListener('click', function(){
//     searchBtn.classList.toggle('hidden');
//     searchForm.classList.toggle('active');
//     searchCloseBtn.classList.toggle('active');
//     serachInput.classList.toggle('active');
// })




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


// const linkList = [...document.querySelectorAll(".my__link")];
// let focusLink;

// for (const el of linkList) {
//   el.addEventListener("focus", e => {
//     focusLink && focusLink.classList.remove("focus");
//     focusLink = e.target;
//     e.target.classList.add("focus");
//   });
// }
});


