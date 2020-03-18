/* eslint-disable linebreak-style */
import menu from './menu';
import main from './main';
import contact from './contact';
// import styles from '../css/style';

const myNav = () => {
  const content = document.getElementById('content');
  const nav = document.createElement('div');
  nav.className = 'nav';
  content.appendChild(nav);
  const logo = new Image();
  logo.setAttribute('src', '/dist/images/re1.jpg');
  logo.classList.add('logo');
  nav.appendChild(logo);
  const navItems = document.createElement('div');
  navItems.className = 'nav-items';
  nav.appendChild(navItems);

  const element = document.createElement('a');
  element.innerHTML = 'MAIN';
  element.addEventListener('click', () => {
    content.innerHTML = '';
    myNav();
    main();
  });
  navItems.appendChild(element);

  const element2 = document.createElement('a');
  element2.innerHTML = 'CONTACT US';
  element2.addEventListener('click', () => {
    content.innerHTML = '';
    myNav();
    contact();
  });
  navItems.appendChild(element2);

  const element3 = document.createElement('a');
  element3.innerHTML = 'MENU';
  element3.addEventListener('click', () => {
    content.innerHTML = '';
    myNav();
    menu();
  });
  navItems.appendChild(element3);
};

export default myNav;