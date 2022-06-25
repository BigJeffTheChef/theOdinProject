
// elements obj via IIFE
let elements = (function () {
    let menuBtn = document.querySelector('button.hamburger');
    let nav = document.querySelector('.nav');
    let content = document.querySelector('.content')
    let themeBtn = document.querySelector('.change-theme');
    return {
        menuBtn, nav, content, themeBtn
    }
})();

// page initialisation
(function initialize() {

    setNavWidthVar();
    setThemeChangeEvent();
    setMenuButtonEvent();

    function setMenuButtonEvent() {
        elements.menuBtn.addEventListener('click', () => {
            const hideSelector = 'nav-off';
            if (elements.nav.classList.contains(hideSelector)) {
                elements.nav.classList.remove(hideSelector);
                setTimeout(() => {
                    elements.nav.classList.remove('nav-gone');
                    elements.content.classList.remove('nav-gone');
                }, 100);
            } else {
                elements.nav.classList.add(hideSelector);
                setTimeout(() => {
                    elements.nav.classList.add('nav-gone');
                    elements.content.classList.add('nav-gone');
                }, 100);
            }
        });
    }

    function setThemeChangeEvent() {
        elements.themeBtn.addEventListener('click', () => {
            let theme = document.querySelector('#theme');
            if (theme.classList.contains('light')) {
                theme.classList.remove('light');
                theme.classList.add('dark');
            } else {
                theme.classList.remove('dark');
                theme.classList.add('light');
            }
        });
    }

    function setNavWidthVar() {
        let x = document.querySelector('.body');
        x.style.setProperty('--nav-width', '-125px');
        x.style.setProperty('--nav-width-offset', '-150px');
    }
})();






