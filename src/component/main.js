/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const main = () => {
  const content = document.getElementById('content');

  const container = document.createElement('div');
  container.className = 'mainContainer';
  content.appendChild(container);

  const main = document.createElement('div');
  main.className = 'main';
  container.appendChild(main);

  const heading = document.createElement('h2');
  heading.innerHTML = 'WELCOME EVERYBODY!';
  heading.classList.add('heading');
  main.appendChild(heading);

  const text = ['lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
      'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem, lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem, lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.',
      'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'];
  for (let i = 0; i < text.length; i += 1) {
    const element = document.createElement('p');
    element.innerHTML = text[i].toUpperCase();
    main.appendChild(element);
  }
};

export default main;