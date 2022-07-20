const elements = {};

window.onload = function initialise() {
    elements.carousel = {
        container: document.querySelector('.carousel'),
        view: document.querySelector('.carousel>.view'),
        hud: document.querySelector('.carousel>.hud'),
        controls: document.querySelector('.carousel>.controls'),
        previousBtn: document.querySelector('.carousel>.controls>div:first-child'),
        nextBtn: document.querySelector('.carousel>.controls>div:last-child'),
    };

    ((function configureCarousel() {
        let imgs = [
            'i1.jpg',
            'i2.jpg',
            'i3.jpg',
            'i4.png',
            'i5.jpg',
            'i6.jpg',
            'i7.jpg',
            'i8.jpg',
        ];
        let displayFirst = true;

        for (let i = 0; i < imgs.length; i++) {
            let imgElement = document.createElement('img');
            let imgContainer = document.createElement('div');
            let dot = document.createElement('div');

            imgElement.src = imgs[i];
            dot.textContent = 'o';

            imgContainer.classList.add('carousel-image');
            if (displayFirst) {
                displayFirst = false;
                imgContainer.classList.add('current');
                dot.classList.add('current');
            } else {
                imgContainer.classList.add('off-right');
                dot.classList.add('off-right')
            }
            dot.addEventListener('click', ()=> slideTo(i));
            imgContainer.appendChild(imgElement);
            elements.carousel.view.appendChild(imgContainer);
            elements.carousel.hud.appendChild(dot);

        }
        // document.querySelector('.carousel>.controls>div:first-child').addEventListener('click', () => slide('previous'));
        if (imgs.length > 1) {
            document.querySelector('.carousel>.controls>div:last-child').addEventListener('click', () => slideTo(1));
        }
        
    })());
};

function slideTo(slideNumber) {
    const dots = elements.carousel.hud.querySelectorAll('div');
    const slides = elements.carousel.view.querySelectorAll('.carousel-image');

    // const currentDot = elements.carousel.hud.querySelector('current');
    // const prevDot = currentDot.previousElementSibling;
    // const nextDot = currentDot.nextElementSibling;

    for (let i = 0; i < dots.length && i < slides.length; i++) {
        if (i < slideNumber) {
            dots[i].classList.add('off-left');
            dots[i].classList.remove('off-right');
            dots[i].classList.remove('current');

            slides[i].classList.add('off-left');
            slides[i].classList.remove('off-right');
            slides[i].classList.remove('current');
        } else if (i > slideNumber) {
            dots[i].classList.remove('off-left');
            dots[i].classList.add('off-right');
            dots[i].classList.remove('current');

            slides[i].classList.remove('off-left');
            slides[i].classList.add('off-right');
            slides[i].classList.remove('current');
        } else {
            dots[i].classList.remove('off-left');
            dots[i].classList.remove('off-right');
            dots[i].classList.add('current');

            slides[i].classList.remove('off-left');
            slides[i].classList.remove('off-right');
            slides[i].classList.add('current');
        }
    }

    if (slideNumber - 1 > 0) {
        elements.carousel.previousBtn.addEventListener('click', () => slideTo(slideNumber - 1));
    } else {
        elements.carousel.previousBtn.removeEventListener('click', () => {});
    }

    if (slideNumber + 1 < slides.length) {
        elements.carousel.nextBtn.addEventListener('click', () => slideTo(slideNumber + 1));
    } else {
        elements.carousel.nextBtn.removeEventListener('click', () => {});
    }
}

function slide(direction) {
    //if (direction !== 'next' && direction !== 'previous') throw Error(`changeSlide( direction ) received unrecognised direction parameter: \"${direction}\" - must be 'next' or 'previous' only.`);


    let currentDot = elements.carousel.hud.querySelector('.current');
    let changeToDot = (direction === 'next') ? currentDot.nextElementSibling : currentDot.previousElementSibling;
    let currentImg = elements.carousel.view.querySelector('.current');
    let changeToImg = (direction === 'next') ? currentImg.nextElementSibling : currentImg.previousElementSibling;
    // console.log(currentDot);
    // console.log(changeToDot);
    // console.log(changeToDot.classList);
    if (changeToDot && changeToImg) {
        currentDot.classList.remove('current');
        changeToDot.classList.add('current');

        currentImg.classList.remove('current');
        currentImg.classList.add((direction === 'next') ? 'off-left' : 'off-right');
        changeToImg.classList.add('current');
        changeToImg.classList.remove((direction === 'next') ? 'off-right' : 'off-left');


        const dotsLeft = elements.carousel.hud.querySelectorAll('.off-left');
        const dotsRight = elements.carousel.hud.querySelectorAll('.off-right');

        currentDot.removeEventListener('click', slide);
        dotsLeft.forEach(element => {
            element.removeEventListener('click', slide);
            element.addEventListener('click', slide('next'));
        });
        dotsRight.forEach(element => {
            element.removeEventListener('click', slide);
            element.addEventListener('click', slide('previous'));
        });
    }
}