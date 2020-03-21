/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const main = () => {
  const content = document.getElementById('content');

  const container = document.createElement('div');
  container.className = 'container main1';
  content.appendChild(container);

  const main = document.createElement('div');
  main.className = 'main row pt-2 mt-2';
  container.appendChild(main);

  const heading = document.createElement('h2');
  heading.innerHTML = `
  <i class="fa fa-cutlery mt-3 mr-2" aria-hidden="true"></i><span class="mt-2">YOU ARE WELCOME !!!</span><i class="fa fa-btc mt-3 ml-2"></i>

  `;
  heading.className = 'heading text-center';
  main.appendChild(heading);

  const text = ['We have a variety of local and continental dishes you can choose from',
      'Enjoy the beauty of our siren environment and great food'];
  for (let i = 0; i < text.length; i += 1) {
    const element = document.createElement('p');
    element.innerHTML = text[i];
    main.appendChild(element);
  }
};

export default main;