/* eslint-disable linebreak-style */
import menu from './menu';
import main from './main';
import contact from './contact';

const myNav = () => {
  const content = document.getElementById('content');
  const nav = document.createElement('nav');
  nav.className = 'navbar navbar-expand-lg navbar-light bg-light';
  content.appendChild(nav);

  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.setAttribute('data-toggle', 'collapse');
  btn.setAttribute('data-target', '#toggleNav');
  btn.className = 'navbar-toggler';

  const span = document.createElement('span');
  span.className = 'navbar-toggler-icon';

  nav.appendChild(btn);
  btn.appendChild(span);
  const container = document.createElement('div');
  container.className = 'collapse navbar-collapse';
  container.setAttribute('id', 'toggleNav');



  const navItems = document.createElement('nav');
  navItems.className = 'navbar navbar-fixed-top navbar-expand-lg navbar-ligh';
  nav.appendChild(navItems);

  const ul = document.createElement('ul');
  ul.className = 'nav nav-tabs navbar-nav mr-auto';
  navItems.appendChild(ul);

  const li = document.createElement('li');
  li.className = 'nav-item';


  const element = document.createElement('a');
  element.className = 'nav-link';

  element.innerHTML = 'MAIN';
  element.addEventListener('click', () => {
    content.innerHTML = '';
    myNav();
    main();
  });
  ul.appendChild(li);
  li.appendChild(element);

  const li2 = document.createElement('li');
  li2.className = 'nav-item';
  const element2 = document.createElement('a');
  element2.innerHTML = 'CONTACT US';
  element2.addEventListener('click', () => {
    content.innerHTML = '';
    myNav();
    contact();
  });
  ul.appendChild(li2);
  li2.appendChild(element2);

  const li3 = document.createElement('li');
  li3.className = 'nav-item';

  const element3 = document.createElement('a');
  element3.innerHTML = 'MENU';
  element3.addEventListener('click', () => {
    content.innerHTML = '';
    myNav();
    menu();
  });
  ul.appendChild(li3);
  li3.appendChild(element3);
};

export default myNav;