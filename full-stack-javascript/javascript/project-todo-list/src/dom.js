
// elements obj via IIFE - faster as DOM queried only once? maybe...
let elements = (function () {
    let menuBtn = document.querySelector('button.hamburger');
    let themeBtn = document.querySelector('.change-theme');
    let body = document.querySelector('body');
    let header = document.querySelector('.header');
    let nav = document.querySelector('.nav');
    let content = document.querySelector('.content')
    return {
        menuBtn,
        themeBtn,
        body,
        header,
        nav,
        content,
    }
})();

// page initialisation
(function initialize() {

    // setNavWidthVar();
    // setMenuButtonEvent();

    setThemeChangeEvent();
    setMenuButtonEvent();
    setMenuPosition();

    function setMenuPosition() {
        elements.nav.style['top'] = (elements.header.offsetHeight -2) + 'px';
        elements.nav.style['left'] = '10px';
        setTimeout(() => {
            elements.nav.classList.remove('hidden');
        },200)
    }

    function setMenuButtonEvent() {
        elements.menuBtn.addEventListener('click', () => {
            const showSelector = 'nav-open';
            if (elements.nav.classList.contains(showSelector)) {
                elements.nav.classList.remove(showSelector);
            } else {
                elements.nav.classList.add(showSelector);
            }
        });
    }

    function setThemeChangeEvent() {
        elements.themeBtn.addEventListener('click', () => {
            elements.body.classList.toggle('dark');
        });
    }
})();