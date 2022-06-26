
// elements obj via IIFE
let elements = (function () {
    let menuBtn = document.querySelector('button.hamburger');
    let nav = document.querySelector('.nav');
    let content = document.querySelector('.content')
    let themeBtn = document.querySelector('.change-theme');
    let theme = document.querySelector('#theme');
    let header = document.querySelector('.header');
    return {
        menuBtn, nav, content, themeBtn, theme, header
    }
})();

// page initialisation
(function initialize() {

    // setNavWidthVar();
    setThemeChangeEvent();
    // setMenuButtonEvent();
    setMenuButtonEvent();
    setMenuPosition();

    function setMenuPosition() {
        elements.nav.style['top'] = (elements.header.offsetHeight + 5) + 'px';
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
            elements.theme.classList.toggle('dark');
            // if (theme.classList.contains('light')) {
            //     theme.classList.remove('light');
            //     theme.classList.toggle('dark');
            // } else {
            //     theme.classList.remove('dark');
            //     theme.classList.add('light');
            // }
        });
    }


})();




// function setMenuButtonEvent() {
//     elements.menuBtn.addEventListener('click', () => {
//         const hideSelector = 'nav-off';
//         const hiddenSelector = 'nav-gone';
//         if (elements.nav.classList.contains(hideSelector)) {
//             elements.nav.classList.remove(hideSelector);
//             elements.nav.classList.remove(hiddenSelector);

//             setTimeout(() => {
//                 // elements.content.classList.remove('nav-gone');
//             }, 1000);
//         } else {
//             elements.nav.classList.add(hideSelector);
//             elements.nav.classList.add(hiddenSelector);
//             // setTimeout(() => {
//             //     elements.nav.classList.add(hiddenSelector);
//             //     // elements.content.classList.add('nav-gone');
//             // }, 1000);
//         }
//     });
// }

// function setNavWidthVar() {
//     let x = document.querySelector('.body');
//     x.style.setProperty('--nav-width', '-125px');
//     x.style.setProperty('--nav-width-offset', '-150px');
// }