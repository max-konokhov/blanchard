document.addEventListener('DOMContentLoaded', function() {

  // БУРГЕР

  // здесь мы определяем функцию, которая отвечает за работу меню, в ней не нужно ничего менять
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





  // ФОРМА ПОИСКА

  function setSearch(params) {
    const openBtn = document.querySelector(`.${params.openBtnClass}`);
    const search = document.querySelector(`.${params.searchClass}`);
    const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

    search.addEventListener("animationend", function (evt) {
      if (this._isOpened && !openBtn.disabled) {
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
    searchClass: "hd-top__form", // класс формы поиска
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

  //  -----СЕКЦИЯ "HERO"--------


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
















  // Переназначем значение атрибута
  // let simplebarLabel = document.querySelector(".simplebar-content-wrapper");
  // simplebarLabel.setAttribute("aria-label", "Прокручиваемый список художников");


  //Кастомный список на основе библиотеки Choise.js
  // Pass single element
  const element1 = document.querySelector('#g-select');
  const choicesGallery = new Choices(element1, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom',
  });





});




