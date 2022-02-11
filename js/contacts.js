(() => {


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


































})();