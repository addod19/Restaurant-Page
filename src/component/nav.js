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

  nav.appendChild(container);


  // const navItems = document.createElement('nav');
  // nav.appendChild(navItems);

  const ul = document.createElement('ul');
  ul.className = 'navbar-nav mr-auto mt-2 mt-lg-0';
  container.appendChild(ul);

  const li = document.createElement('li');
  li.className = 'nav-item';
  ul.appendChild(li);

  const a = document.createElement('a');
  a.className = 'nav-link';
  li.appendChild(a);

  a.innerHTML = 'Home';
  a.addEventListener('click', () => {
    content.innerHTML = '';
    myNav();
    main();
  });
  ul.appendChild(li);
  li.appendChild(a);

  const li2 = document.createElement('li');
  li2.className = 'nav-item';
  const a2 = document.createElement('a');
  a2.innerHTML = 'CONTACT US';
  a2.addEventListener('click', () => {
    content.innerHTML = '';
    myNav();
    contact();
  });
  ul.appendChild(li2);
  li2.appendChild(a2);

  const li3 = document.createElement('li');
  li3.className = 'nav-item';

  const a3 = document.createElement('a');
  a3.innerHTML = 'MENU';
  a3.addEventListener('click', () => {
    content.innerHTML = '';
    myNav();
    menu();
  });
  ul.appendChild(li3);
  li3.appendChild(a3);

  return nav;
};

export default myNav;