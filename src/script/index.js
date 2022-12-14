import data from '../../assets/data-source/data-source.js';

const contentLanguage = document.getElementById('language-menu-main');
const languageMenu = document.getElementById('language-menu-second');
const languageInfo = document.getElementById('language-info');

const userLanguage = navigator.language;
const renderLanguageMenu = () => {
    languageMenu.innerHTML = '';
    const language = new RegExp(userLanguage, 'i');
    data.forEach(data => {
        if (data.languageId.includes(userLanguage)) {
            contentLanguage.innerText = data.language;
            languageInfo.innerText = data.languageMenu + ": ";
            return; 
        }
        const languageMenuListElement = document.createElement('li');
        languageMenuListElement.innerText = data.language;
        languageMenuListElement.setAttribute('id', `${data.languageId}`);
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
            externalElement.setAttribute('target','_blank');
            externalElement.setAttribute('rel', 'noopener');
            externalElement.appendChild(nameElement);

            const imgExternalElement = document.createElement('img');
            imgExternalElement.setAttribute('src', data.externalData.icon);
            imgExternalElement.setAttribute('class', 'svg external-link')
            
            externalElement.appendChild(imgExternalElement);
            listElement.appendChild(externalElement);
        } else {
            listElement.appendChild(nameElement);
        }

        listContainer.appendChild(listElement);
    });

    contactContainer.appendChild(listContainer)
}

const renderDetailInfo = (index) => {
    const detailBoxContainer = document.getElementById('detail-box');
    detailBoxContainer.innerHTML = '';

    data[index].info.forEach((info) => {
        const detailContainer = document.createElement('div');
        detailContainer.classList.add('detail-container');

        const rightDetailElement = document.createElement('span');
        rightDetailElement.className = 'right';
        info.right.forEach((data) => {
            const detailInfoContainer = document.createElement('span');
            detailInfoContainer.className = 'detail-info';

            const contentContainer = document.createElement('span');
            contentContainer.className = 'content';

            const headerContentElement = document.createElement('p');
            headerContentElement.className = 'content-header';
            headerContentElement.innerText = data.title;

            const mainContentElement = document.createElement('p');
            mainContentElement.className = 'content-main';
            mainContentElement.innerText = data.main;

            const secondContentElement = document.createElement('p');
            secondContentElement.className = 'content-main';
            secondContentElement.innerText = data.second;

            const footerContentElement = document.createElement('p');
            footerContentElement.className = 'content-footer';
            footerContentElement.innerText = data.footer;

            contentContainer.appendChild(headerContentElement);
            contentContainer.appendChild(mainContentElement);
            contentContainer.appendChild(secondContentElement);
            contentContainer.appendChild(footerContentElement);

            detailInfoContainer.appendChild(contentContainer);

            rightDetailElement.appendChild(detailInfoContainer);
        });

        const ringElement = document.createElement('span');
        ringElement.setAttribute('class', `detail-info ${info.type}`);
        ringElement.setAttribute('id', 'ring');

        const leftDetailElement = document.createElement('span');
        leftDetailElement.className = 'left';
        info.left.forEach((data) => {
            const detailInfoContainer = document.createElement('span');
            detailInfoContainer.className = 'detail-info';

            const contentContainer = document.createElement('span');
            contentContainer.className = 'content';

            const headerContentElement = document.createElement('p');
            headerContentElement.className = 'content-header';
            headerContentElement.innerText = data.title;

            const mainContentElement = document.createElement('p');
            mainContentElement.className = 'content-main';
            mainContentElement.innerText = data.main;

            const secondContentElement = document.createElement('p');
            secondContentElement.className = 'content-main';
            secondContentElement.innerText = data.second;

            const footerContentElement = document.createElement('p');
            footerContentElement.className = 'content-footer';
            footerContentElement.innerText = data.footer;

            contentContainer.appendChild(headerContentElement);
            contentContainer.appendChild(mainContentElement);
            contentContainer.appendChild(secondContentElement);
            contentContainer.appendChild(footerContentElement);

            detailInfoContainer.appendChild(contentContainer);

            leftDetailElement.appendChild(detailInfoContainer);
        });
        
        detailContainer.appendChild(rightDetailElement);
        detailContainer.appendChild(ringElement);
        detailContainer.appendChild(leftDetailElement);

        detailBoxContainer.appendChild(detailContainer);
    });
    
}

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener("scroll", (event) => {
        const navBarElement = document.getElementById('nav-bar');
        if (window.scrollY !== 0) {
            navBarElement.style.backgroundColor = 'rgba(203, 237, 213,0.8)';
        } else {
            navBarElement.style.backgroundColor = 'rgba(203, 237, 213,1)';
        }
    });
    contentLanguage.addEventListener('click', function () {
        languageMenu.classList.toggle('show');
    });

    languageMenu.addEventListener('click', function (e) {
        const targetId = e.target.id;
        const index = data.findIndex((data) => data.languageId.includes(targetId));
        swapLanguage(targetId, index);
        renderBiography(index);
        renderDetailInfo(index);
        renderContact(index);
        languageMenu.classList.remove('show');
    })
    
    const index = data.findIndex((data) => data.languageId.includes(userLanguage));

    renderBiography(index);
    renderContact(index);
    renderLanguageMenu();
    renderDetailInfo(index);
})