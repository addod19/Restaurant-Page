import menu from './menu';
import home from './home';
import contact from './contact';

const nav = () => {
  const content = document.getElementById('content');
  const nav = document.createElement('DIV');
  nav.className = 'navbar';
  content.appendChild(nav);
  const logo = document.createElement('IMG');
  logo.setAttribute('src', './images/logo.png');
  nav.appendChild(logo);
  const navItems = document.createElement('DIV');
  navItems.className = 'nav-items';
  nav.appendChild(navItems);

  const element = document.createElement('SPAN');
  element.innerHTML = 'HOME';
  element.addEventListener('click', () => {
    content.innerHTML = '';
    navbar();
    home();
  });
  navItems.appendChild(element);

  const element2 = document.createElement('SPAN');
  element2.innerHTML = 'CONTACT US';
  element2.addEventListener('click', () => {
    content.innerHTML = '';
    navbar();
    contact();
  });
  navItems.appendChild(element2);

  const element3 = document.createElement('SPAN');
  element3.innerHTML = 'MENU';
  element3.addEventListener('click', () => {
    content.innerHTML = '';
    navbar();
    menu();
  });
  navItems.appendChild(element3);
};

export default nav;