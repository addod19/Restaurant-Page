/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
import main from './main';



const nav = () => {
  const content = document.getElementById('content');
  const nav = document.createElement('div');
  nav.className = 'navbar';
  content.appendChild(nav);
  const logo = document.createElement('img');
  logo.setAttribute('src', '../dist/images/re.jpg');
  nav.appendChild(logo);
  const navItems = document.createElement('div');
  navItems.className = 'nav-items';
  nav.appendChild(navItems);

  const element = document.createElement('span');
  element.innerHTML = 'HOME';
  element.addEventListener('click', () => {
    content.innerHTML = '';
    main();
  });
  navItems.appendChild(element);

  const element2 = document.createElement('SPAN');
  element2.innerHTML = 'CONTACT US';
  element2.addEventListener('click', () => {
    content.innerHTML = '';
    main();
  });
  navItems.appendChild(element2);

  const element3 = document.createElement('SPAN');
  element3.innerHTML = 'MENU';
  element3.addEventListener('click', () => {
    content.innerHTML = '';
    main();
  });
  navItems.appendChild(element3);
};

export default nav;