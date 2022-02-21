document.addEventListener('DOMContentLoaded', function() {

  // -----GLOBAL-------

  // Глобальный декоратор debounce
  function debounce(f, ms) {
    let isCooldown = false;

    return function() {
      if (isCooldown) return;

      f.apply(this, arguments);
      isCooldown = true;

      setTimeout(() => isCooldown = false, ms);
    };
  }

  // Глобальная функция getWindowWidth
  function getWindowWidth () {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }

  // Глобальные константы ширины
  const MOBILE_WIDTH = 576;
  const HALFDESKTOP_WIDTH = 970;
  const TABLET_WIDTH = 1280;


  // -------HEADER------

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


  window.debounce = debounce;
  window.getWindowWidth = getWindowWidth;
  window.TABLET_WIDTH = TABLET_WIDTH;
  window.MOBILE_WIDTH = MOBILE_WIDTH;
  window.HALFDESKTOP_WIDTH = HALFDESKTOP_WIDTH;



  // БУРГЕР-МЕНЮ

  // здесь мы определяем функцию, которая отвечает за работу меню
  function setBurger(params) {
    const btn = document.querySelector(`.${params.btnClass}`);
    const menu = document.querySelector(`.${params.menuClass}`);
    const links = document.querySelectorAll(`.${params.linksClass}`);

    function onBtnClick () {
      if (window.getWindowWidth() <= window.TABLET_WIDTH) {

        btn.classList.toggle(params.activeClass);

        if (
          !menu.classList.contains(params.activeClass) &&
          !menu.classList.contains(params.hiddenClass)
        ) {
          menu.classList.add(params.activeClass);
          document.body.style.overflow = 'hidden';
          btn.setAttribute('aria-label', 'Закрыть бургер-меню');
        } else {
          menu.classList.add(params.hiddenClass);
          document.body.removeAttribute('style');
          btn.setAttribute('aria-label', 'Открыть бургер-меню');
        }
      }
    }

    menu.addEventListener("animationend", function () {
      if (this.classList.contains(params.hiddenClass)) {
          this.classList.remove(params.activeClass);
          this.classList.remove(params.hiddenClass);
      }
    });

    btn.addEventListener("click", window.debounce(onBtnClick, 450));

    links.forEach((link) => {
      link.addEventListener("click", window.debounce(onBtnClick, 450));
    });
  }

  // здесь мы вызываем функцию и передаем в нее классы наших элементов
  setBurger({
    btnClass: "js-burger", // класс бургера
    menuClass: "js-menu-wrap", // класс меню
    activeClass: "is-opened", // класс открытого состояния
    hiddenClass: "is-closed", // класс закрывающегося состояния (удаляется сразу после закрытия)
    linksClass: "js-menu-link", //класс ссылки меню
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


  //  -----СЕКЦИЯ "GALLERY"--------

  //Кастомный список на основе библиотеки Choise.js
  // Pass single element
  const element1 = document.querySelector('#g-select');
  const choicesGallery = new Choices(element1, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom',
  });


  // Слайдер галереи
  let gallerySlider = new Swiper(".g-swiper-box", {
    slidesPerView: 1,
    spaceBetween: 15,
    slidesPerGroup: 1,
    pagination: {
      el: ".g-swiper__pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".g-swiper__btn-nav--next",
      prevEl: ".g-swiper__btn-nav--prev",
    },

    // Responsive breakpoints
    breakpoints: {
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

      // when window width is >= 1281px
      1281: {
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


  //  -----СЕКЦИЯ "CATALOG"--------

  // Функция для табов с параметрами
  function setTabs (dataPath, dataTarget) {
    const painterBtn = document.querySelectorAll(`.ac-panel__btn[${dataPath}]`);
    const painterContent = document.querySelectorAll(`.js-tab-content[${dataTarget}]`);

    painterBtn.forEach((btn) => {
      btn.addEventListener('click', function (evt) {
        const path = this.getAttribute(dataPath);
        console.log(path);
        const target = document.querySelector(`.js-tab-content[${dataTarget}="${path}"]`);


        painterBtn.forEach((currentBtn) => {
          currentBtn.classList.remove('is-active');
        });

        this.classList.add('is-active');

        painterContent.forEach((content) => {
          content.classList.remove('is-active');
        });

        target.classList.add('is-active');
      });
    });
  }

  // в аргументах функции передаем индивидуальные data атрибуты, которые установлены в разметке для кнопок и вкладок
  setTabs('data-painters-path', 'data-painters-target');

  // new Accordion('.accordion-container');
  new Accordion('.accordion', {
    duration: 600,
    openOnInit: [0]
  });


  // Функция для плавного скролла к табу художников
  // на ширине 970px и ниже в секции "Каталог"
  function scrollToContent (link, isMobile) {
    if (isMobile && window.getWindowWidth() > window.HALFDESKTOP_WIDTH) {
      return;
    }

    const scrollPath = link.getAttribute('data-scroll-path');
    if (Boolean(scrollPath)) {
      const scrollTarget = document.getElementById(scrollPath);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
          top: elementPosition,
          behavior: 'smooth'
      });
    }
  }

  document.querySelectorAll('.js-mobile-scroll').forEach(btn => {
    btn.addEventListener('click', function() {
      scrollToContent(this, true);
    });
  });



  //  -----СЕКЦИЯ "EVENTS"--------

  // Слайдер событий
  let eventsSlider = new Swiper(".events__swiper", {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 15,
    lidesPerGroup: 1,
    navigation: {
      nextEl: ".events__btn-nav--next",
      prevEl: ".events__btn-nav--prev",
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      },

      // Responsive breakpoints
    breakpoints: {

      // when window width is >= 600px
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
        slidesPerView: 3,
        spaceBetween: 27,
        slidesPerGroup: 3,
      },

      // when window width is >= 1280px
      1280: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },
  });


  //  -----СЕКЦИЯ "PROJECTS"--------

  // Инициализация плагина тултипов
  tippy('.js-btn-tooltip', {
    theme: 'Blanchard',
    maxWidth: 264,
  });

  // Инициализация слайдера партнеров
  const projectsSlider = new Swiper(".js-partners-slider", {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
      nextEl: ".projects__btn-nav--next",
      prevEl: ".projects__btn-nav--prev",
    },

    // Responsive breakpoints
    breakpoints: {

      // when window width is >= 601px
      601: {
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

      // when window width is >= 1281px
      1281: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },
  });


  //  -----СЕКЦИЯ "CONTACTS"--------

  // Скрипт инициализации плагина Inputmask с маской телефона
  var selector = document.getElementById("tel");
  var im = new Inputmask("+7(999) -999-99-99");

  im.mask(selector);


  // Скрипт для валидации полей формы
  new JustValidate('.contacts__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 15
      },

      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      }
    },

    messages: {
      name: {
        required: 'Обязательное поле для заполнения',
        minLength: 'Имя должно состоять минимум из 2 символов',
        maxLength: 'Имя не должно превышать 15 символлов',
      },

      tel: {
        required: 'Обязательное поле для заполнения',
        function: 'Телефон должен содержать 10 цифр',
      }
    }
  });


  //Яндекс-карта с кастомной меткой

  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init() {
    // Создание карты.
    const mapElem = document.querySelector('#map');
    const myMap = new ymaps.Map(
      "map",
          {
          center: [55.760223, 37.614741],
          zoom: 14,
          controls: ['geolocationControl', 'zoomControl']
          },
          {
          suppressMapOpenBlock: true,
          geolocationControlSize: "large",
          geolocationControlPosition:  { top: "200px", right: "20px" },
          geolocationControlFloat: 'none',
          zoomControlSize: "small",
          zoomControlFloat: "none",
          zoomControlPosition: { top: "120px", right: "20px" }
          }
    );

    myMap.behaviors.disable('scrollZoom');

    // Создание геообъекта с типом точка (метка).
    const myPlacemark = new ymaps.Placemark(
      [55.760223, 37.614741],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: 'img/contacts/map-marker.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-10, -10],
      }
    );

    myMap.geoObjects.add(myPlacemark);

    setTimeout(() => {
      myMap.container.fitToViewport();
    }, 5000);
  }



  //  -----POPUP ДЛЯ ГАЛЕРЕИ--------

  // Скрипт на модальное окно в галерее с отключением
  // скролла у Body и отменой прыжка в начало страницы

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


});




