import data from '../../assets/data-source/data-source.js';

const contentLanguage = document.getElementById('language-menu-main');
const languageMenu = document.getElementById('language-menu-second');
const languageInfo = document.getElementById('language-info');

const userLanguage = navigator.language;
const renderLanguageMenu = () => {
    languageMenu.innerHTML = '';
    const language = new RegExp(userLanguage, 'i');
    data.forEach(data => {
        if (language.test(data.languageId)) {
            contentLanguage.innerText = data.language;
            languageInfo.innerText = data.languageMenu + ": ";
            return; 
        }
        const languageMenuListElement = document.createElement('li');
        languageMenuListElement.innerText = data.language;
        languageMenuListElement.setAttribute('id', data.languageId);
        languageMenu.appendChild(languageMenuListElement);
    });
};

const swapLanguage = (targetId, swapIndex) => {
    languageMenu.innerHTML = '';
    contentLanguage.innerText = data[swapIndex].language;
    languageInfo.innerText = data[swapIndex].languageMenu + ": ";

    data.forEach(data => {
        if (data.languageId === targetId) {
            return;
        }
        const languageMenuListElement = document.createElement('li');
        languageMenuListElement.innerText = data.language;
        languageMenuListElement.setAttribute('id', data.languageId);
        languageMenu.appendChild(languageMenuListElement);
    });
}

const renderBiography = (index) => {
    
}

document.addEventListener('DOMContentLoaded', function () {
    contentLanguage.addEventListener('click', function () {
        languageMenu.classList.toggle('show');
    });

    languageMenu.addEventListener('click', function (e) {
        const targetId = e.target.id;
        const index = data.findIndex((data) => data.languageId === targetId);
        // contentLanguage.innerText = data[index].language;
        // languageInfo.innerText = data[index].languageMenu;
        swapLanguage(targetId, index);
        languageMenu.classList.remove('show');
    })
    
    renderLanguageMenu();
})