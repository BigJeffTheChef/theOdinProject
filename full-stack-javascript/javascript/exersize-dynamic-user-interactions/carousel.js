
class Carousel {
    _self
    _imgs;
    _current;
    carousel;
    _view;
    _hud;
    _controls;
    _controlPrev;
    _controlNext;
    _self;
    _sliding;

    /**
     * 
     * @param {HTMLElement} elementToAppend element to append carousel to
     * @param {string} path relative path to images 
     * @param  {...any} imgs comma separated list of images (& file extensions)
     */
    constructor(elementToAppend, path, ...imgs) {
        self = this; // save context ... bit hacky?
        this._imgs = imgs;
        this._current = 0;

        this.carousel = document.createElement('div');
        this._view = document.createElement('div');
        this._hud = document.createElement('div');
        this._controls = document.createElement('div');
        this._controlPrev = document.createElement('div');
        this._controlNext = document.createElement('div');

        this.carousel.classList.add('carousel');
        this._view.classList.add('view');
        this._hud.classList.add('hud');
        this._controls.classList.add('controls');
        this._controlPrev.classList.add('control-prev');
        this._controlNext.classList.add('control-next');

        this._controlPrev.textContent = 'Previous';
        this._controlNext.textContent = 'Next';

        for (let i = 0, displayFirst = true; i < this._imgs.length; i++) {
            const imgElement = document.createElement('img');
            const imgContainer = document.createElement('div');
            const imgDot = document.createElement('div');

            imgElement.src = path.concat(imgs[i]);
            imgDot.textContent = 'o';

            imgContainer.classList.add('carousel-image');
            if (displayFirst) {
                displayFirst = false;
                imgContainer.classList.add('current');
                imgDot.classList.add('current');
            } else {
                imgContainer.classList.add('off-right');
                // imgDot.classList.add('off-right')
            }
            imgDot.addEventListener('click', () => this.slideTo(i));
            imgContainer.appendChild(imgElement);
            this._view.appendChild(imgContainer);
            this._hud.appendChild(imgDot);
        }

        this._controlPrev.addEventListener('click', this.slidePrev);
        this._controlNext.addEventListener('click', this.slideNext);

        this._controls.append(this._controlPrev, this._controlNext);
        this.carousel.append(this._view, this._hud, this._controls);

        elementToAppend.appendChild(this.carousel);
    }
    slideTo(slideNumber) {
        /*
        set current
        advance the image to slideNumber
            sort classes
        advance the dot to slide slideNumber
            sort classes
        */
        if (slideNumber < 0) {
            return 'first';
        } else if (slideNumber >= self._imgs.length) {
            return 'last';
        }
        self._current = slideNumber;
        let slide = self._view.firstElementChild;
        let dot = self._hud.firstElementChild;


        for (let i = 0; i < self._imgs.length; i++, slide = slide.nextElementSibling, dot = dot.nextElementSibling) {
            if (i < slideNumber) {
                slide.classList.add('off-left');
                slide.classList.remove('off-right');
                slide.classList.remove('current');

                dot.classList.add('off-left');
                dot.classList.remove('off-right');
                dot.classList.remove('current');
            } else if (i > slideNumber) {
                slide.classList.remove('off-left');
                slide.classList.add('off-right');
                slide.classList.remove('current');

                dot.classList.remove('off-left');
                dot.classList.add('off-right');
                dot.classList.remove('current');
            } else if (i === slideNumber) {
                slide.classList.remove('off-left');
                slide.classList.remove('off-right');
                slide.classList.add('current');

                dot.classList.remove('off-left');
                dot.classList.remove('off-right');
                dot.classList.add('current');
            }
        }
    }
    slidePrev() { return self.slideTo(self._current - 1); }
    slideNext() { return self.slideTo(self._current + 1); }
    /**
     * 
     * @param {'forwards' | 'backwards'} direction 
     * @param {boolean} bounce controls if the slideshow bounces direction when hitting end of slideshow
     * @param {number} internalInMs a positive number
     */
    slideShow(direction, bounce, internalInMs) {
        if ((direction !== 'forwards' && direction !== 'backwards' && direction !== undefined)
            || internalInMs < 0) {
            return;
        }
        const interval = internalInMs || 5000;
        const bouncing = bounce || false;

        let f = () => {
            self._sliding = setInterval(() => {
                console.log('forward');
                const response = self.slideNext();
                if (response === 'last') {
                    clearInterval(self._sliding);
                    if (bouncing) b();
                }
            }, interval);
        };

        let b = () => {
            self._sliding = setInterval(() => {
                console.log('backwards');
                const response = self.slidePrev();
                if (response === 'first') {
                    clearInterval(self._sliding);
                    if (bouncing) f();
                }
            }, interval);
        };

        if (direction === 'forwards') f();
        if (direction === 'backwards') b();
    }
    stopSlideShow() {
        if (_sliding) clearInterval(_sliding);
    }
};


let c = new Carousel(document.body, './', 'i1.jpg', 'i2.jpg', 'i3.jpg', 'i4.png', 'i5.jpg', 'i6.jpg', 'i7.jpg', 'i8.jpg');
c.slideShow('forwards', true, 2500);