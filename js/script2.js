(() => {
    function setTabs (dataPath, dataTarget) {
        const btns = document.querySelectorAll(`.js-tab-btn[${dataPath}]`);
        const contents = document.querySelectorAll(`.js-tab-content[${dataTarget}]`);
        
        btns.forEach((btn) => {
            btn.addEventListener('click', function (evt) {
                const path = this.getAttribute(dataPath);
                console.log(path);
                const target = document.querySelector(`.js-tab-content[${dataTarget}="${path}"]`);


                btns.forEach((currentBtn) => {
                    currentBtn.classList.remove('is-active');
                });

                this.classList.add('is-active');

                contents.forEach((content) => {
                    content.classList.remove('is-active');
                });

                target.classList.add('is-active');
            });
        });
    }

    setTabs('data-flags-path', 'data-flags-target'); // в аргументах функции передаем индивидуальные data атрибуты, которые установлены в разметке для кнопок и вкладок
    setTabs('data-painters-path', 'data-painters-target');
    setTabs('data-other-painters-path', 'data-other-painters-target');
  
  
  //  инициализация аккордеона
   $( ".js-accordion" ).accordion({
      collapsible: true,
      active: 0,
      icons: false,
      heightStyle: 'content'
    });
})();