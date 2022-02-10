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



































})();