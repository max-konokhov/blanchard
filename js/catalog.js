(() => {
    
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
        
    });

})();