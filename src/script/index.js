import data from '../../assets/data-source/data-source.js';

const contentLanguage = document.getElementById('language-menu-main');
const languageMenu = document.getElementById('language-menu-second');

const userLanguage = navigator.language;
const renderLanguageMenu = () => {
    const language = new RegExp(userLanguage, 'i');
    data.forEach(data => {
        if (language.test(data.language)) {
            contentLanguage.innerText = data.language;
            return;
        }
    });
};

const renderBiography = (index) => {
    
}

document.addEventListener('DOMContentLoaded', function () {
    
    
    

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