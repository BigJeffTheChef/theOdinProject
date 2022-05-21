let div = document.querySelector('#container');

let p = document.createElement('p');
p.textContent = 'Hey I\'m red!';
p.style['color'] = 'red';
div.appendChild(p);

let h3 = document.createElement('h3');
h3.textContent = 'I\'m a blue h3!';
h3.style['color'] = 'blue';
div.appendChild(h3);

let newDiv = document.createElement('div');
newDiv.classList.toggle('newDiv');
newDiv.style['background-color'] = 'pink';
newDiv.style['border'] = '1px solid black';
div.appendChild(newDiv);

let h1 = document.createElement('h1');
h1.textContent = "I'm in a div!";
newDiv.appendChild(h1);

let p2 = document.createElement('p');
p2.textContent = "ME TOO";
newDiv.appendChild(p2);

