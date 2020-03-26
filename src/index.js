import menu from './modules/menu';
import home from './modules/home';
import contact from './modules/contact';

const tabSwitch = () => {
  const content = document.getElementById('content');
  const nav = document.createElement('nav');
  nav.className = 'navbar navbar-expand-lg navbar-light custom';
  content.appendChild(nav);

  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.setAttribute('data-toggle', 'collapse');
  btn.setAttribute('data-target', '#toggleNav');
  btn.className = 'navbar-toggler sec';

  const span = document.createElement('span');
  span.className = 'navbar-toggler-icon';

  nav.appendChild(btn);
  btn.appendChild(span);
  const container = document.createElement('div');
  container.className = 'collapse navbar-collapse';
  container.setAttribute('id', 'toggleNav');

  nav.appendChild(container);

  const ul = document.createElement('ul');
  ul.className = 'navbar-nav p-2 mt-lg-0';
  container.appendChild(ul);

  const li = document.createElement('li');
  li.className = 'nav-item mr-4 font-weight-bold';
  ul.appendChild(li);

  const a = document.createElement('a');
  li.appendChild(a);

  a.innerHTML = 'HOME';
  a.addEventListener('click', () => {
    content.innerHTML = '';
    tabSwitch();
    home();
  });
  ul.appendChild(li);
  li.appendChild(a);

  const li2 = document.createElement('li');
  li2.className = 'nav-item mr-4 font-weight-bold';
  const a2 = document.createElement('a');
  a2.innerHTML = 'CONTACT US';
  a2.addEventListener('click', () => {
    content.innerHTML = '';
    tabSwitch();
    contact();
  });
  ul.appendChild(li2);
  li2.appendChild(a2);

  const li3 = document.createElement('li');
  li3.className = 'nav-item font-weight-bold';

  const a3 = document.createElement('a');
  a3.innerHTML = 'MENU';
  a3.addEventListener('click', () => {
    content.innerHTML = '';
    tabSwitch();
    menu();
  });
  ul.appendChild(li3);
  li3.appendChild(a3);

  return nav;
};

export default tabSwitch;

tabSwitch();
home();