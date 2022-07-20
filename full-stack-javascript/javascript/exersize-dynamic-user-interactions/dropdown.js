createDropDownMenu(document.body, 'Menu', '1', '2', '3');

createDropDownMenu(document.body, 'Menu2', 'option 1', 'option 2', 'option 3');

function createDropDownMenu(elementToAppend, menuTitle, ...options) {
  const ul = document.createElement('ul');

  const menu = document.createElement('div');
  menu.classList.add('menu');

  const menuTrigger = document.createElement('div');
  menuTrigger.classList.add('menu-trigger');
  menuTrigger.textContent = menuTitle;
  menuTrigger.addEventListener('click', () => {
    menu.classList.toggle('visible');
  });

  for (const option of options) {
    const li = document.createElement('li');
    li.textContent = option;
    ul.appendChild(li);
  }
  menu.appendChild(ul);
  menuTrigger.append(menu);

  elementToAppend.appendChild(menuTrigger);
}