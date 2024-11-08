

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.tab-button'); // Кнопки вкладок
    const tabContents = document.querySelectorAll('.tab-content'); // Контент вкладок
    const hero = document.querySelector('.main__wrapper--bg'); // Фоновый элемент
    const heroMain = document.querySelector('.hero__tab--bg'); // Главный фон вкладок
    const navLink = document.querySelectorAll('.header_item'); // Ссылки на странице
    const mainInfo= document.querySelector('.main-info');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Получаем номер выбранной вкладки
            const tabNumber = this.getAttribute('data-tab');
            
            // Скрываем все элементы tab-content
            tabContents.forEach(content => {
                content.classList.add('hidden');
            });
            mainInfo.classList.add('hidden');
            


            // Показываем контент активной вкладки
            const activeTab = document.getElementById(`tab-${tabNumber}`);
            if (activeTab) {
                activeTab.classList.remove('hidden');
            }

            // Удаляем все классы фонов у hero
            hero.classList.remove('bg-1', 'bg-2', 'bg-3', 'bg-4');
            heroMain.classList.add('hidden-bg');

            // Добавляем соответствующий класс фона
            hero.classList.add(`bg-${tabNumber}`);


            // Изменяем цвет ссылок, добавляя класс white
            navLink.forEach(link => {
                link.classList.add('white');
            });

            document.querySelectorAll('.tab--bg').forEach(bg => {
                bg.classList.add('hidden');
            });

            // Получаем внутреннюю панель `.tab--bg` для нажатой кнопки
            const tabBg = this.querySelector('.tab--bg');

            // Удаляем класс `hidden` у текущей панели, если он есть
            if (tabBg.classList.contains('hidden')) {
                tabBg.classList.remove('hidden');
            } else {
                tabBg.classList.add('hidden'); // Если панель была открыта, закрываем её
            }
           
            
        });
    });
   
});
