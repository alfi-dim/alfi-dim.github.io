document.addEventListener('DOMContentLoaded', function () {
    const languageMain = document.getElementById('language-menu-main');
    const languageSecond = document.getElementById('language-menu-second');

    languageMain.addEventListener('click', function () {
        languageSecond.classList.toggle('show');
    });

    languageSecond.addEventListener('click', function (e) {
        const clicked = e.target.innerText;

        const b = languageMain.innerText;
        languageMain.innerText = clicked;
        e.target.innerText = b;
        languageSecond.classList.remove('show');
    })

})