const btn = document.getElementById('click-me-2');
btn.onclick = () => alert('also clicked!');

const btn2 = document.querySelector('#click-me-3');
btn2.addEventListener('click', () => alert('and another!'));

const btn3 = document.querySelector('#click-me-4');
btn3.addEventListener('click', alertFunct);

function alertFunct() {
    alert('another way wooow');
};

const btn5 = document.querySelector('#click-me-5');
btn5.addEventListener('click', function (e) {
    alert(e);
    alert(e.target);
    e.target.style['color'] = 'red';
})

const divs = document.querySelectorAll('.content');
divs.forEach(element => {
    element.style['background-color'] = 'black';
    element.style['color'] = 'white';
})
