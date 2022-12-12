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
    const nameElement = document.createElement('h1');
    const headerElement = document.createElement('h3');
    const summaryEleemnt = document.createElement('h5');

    nameElement.innerText = "Dimas Alfiansyah";
    headerElement.innerText = data[index].header;
    summaryEleemnt.innerText = data[index].summary;

    const biographyElement = document.getElementById('main-info');
    biographyElement.innerHTML = '';

    biographyElement.appendChild(nameElement);
    biographyElement.appendChild(headerElement);
    biographyElement.appendChild(summaryEleemnt);
}

const renderContact = (index) => {
    const contactContainer = document.getElementById('sub-info');
    contactContainer.innerHTML = '';
    const listContainer = document.createElement('ul');
    listContainer.innerHTML = '';

    console.log(index);
    data[index].contact.forEach((data) => {
        const listElement = document.createElement('li');
        const iconElement = document.createElement('img');
        iconElement.setAttribute('src', data.icon);
        iconElement.setAttribute('class', 'svg');

        const nameElement = document.createElement('p');
        nameElement.setAttribute('id', 'name');
        nameElement.innerText = data.name;

        listElement.appendChild(iconElement);
        if (data.isExternal) {
            const externalElement = document.createElement('a');
            externalElement.setAttribute('href', data.externalData.link);
            externalElement.appendChild(nameElement);

            const imgExternalElement = document.createElement('img');
            imgExternalElement.setAttribute('src', data.externalData.icon);
            imgExternalElement.setAttribute('class', 'svg external-link')
            
            externalElement.appendChild(imgExternalElement);
            if (typeof data.externalData.div === 'string') {
                externalElement.innerHTML = data.externalData.div;
            }
            listElement.appendChild(externalElement);
        } else {
            listElement.appendChild(nameElement);
        }

        listContainer.appendChild(listElement);
    });

    contactContainer.appendChild(listContainer)
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
        renderBiography(index);
        languageMenu.classList.remove('show');
    })
    
    const index = data.findIndex((data) => data.languageId === userLanguage.toUpperCase());
    renderBiography(index);
    renderContact(index);
    renderLanguageMenu();
})