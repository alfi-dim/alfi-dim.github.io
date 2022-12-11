import data from '../../assets/data-source/data-source.js';

const userLanguage = navigator.language;
const renderLanguageMenu = () => {
    data.forEach(data => {
        console.log(data);
    });
};

document.addEventListener('DOMContentLoaded', function () {
    
    const contentLanguage = document.getElementById('language-menu-main');
    const languageMenu = document.getElementById('language-menu-second');
    
    

    contentLanguage.addEventListener('click', function () {
        languageMenu.classList.toggle('show');
    });

    languageMenu.addEventListener('click', function (e) {
        const clicked = e.target.innerText;

        const b = contentLanguage.innerText;
        contentLanguage.innerText = clicked;
        e.target.innerText = b;
        languageMenu.classList.remove('show');
    })
    
    renderLanguageMenu();
})