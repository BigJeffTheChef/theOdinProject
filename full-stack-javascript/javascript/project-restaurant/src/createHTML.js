function generateHTML() {
    let container = document.createElement('div');
    container.id = 'content';

    let header = generateHeader();

    let body = generateBody();

    container.appendChild(header);
    container.appendChild(body);
    return container;
}

function generateHeader() {
    let header = document.createElement('div');
    header.classList.add('header');
    header.textContent = "Hello and welcome to this awful restaurant";
    return header;
}

function generateBody() {
    let body = document.createElement('div');
    body.classList.add('body');

    let bodyNav = generateBodyNav();
    let bodyMain = generateBodyMain();

    body.appendChild(bodyNav);
    body.appendChild(bodyMain);

    return body;

    function generateBodyNav() {
        let bodyNav = document.createElement('div');
        bodyNav.classList.add('body-nav');
        bodyNav.appendChild(generateNavElement('home'));
        bodyNav.appendChild(generateNavElement('menu'));
        bodyNav.appendChild(generateNavElement('hours'));

        return bodyNav;

        function generateNavElement(text) {
            let element = document.createElement('button');
            element.classList.add('nav-button');
            element.textContent = text;
            return element;
        }
    }

    function generateBodyMain() {
        let bodyMain = document.createElement('div');
        bodyMain.classList.add('body-main');
        return bodyMain;
    }
}


export {
    generateHTML
};