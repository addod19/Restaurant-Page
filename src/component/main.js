/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const main = () => {
  const content = document.getElementById('content');

  const container = document.createElement('div');
  container.className = 'mainContainer';
  content.appendChild(container);
  // console.log(container);
  const main = document.createElement('div');
  main.className = 'main row';
  container.appendChild(main);
  // console.log(main);
  const heading = document.createElement('h2');
  heading.innerHTML = 'WELCOME EVERYBODY!';
  heading.classList.add('heading');
  main.appendChild(heading);

  const text = ['We have a variety of local and continental dishes you can choose from',
      'Enjoy the beauty of our siren environment and great food'];
  console.log(text)
  for (let i = 0; i < text.length; i += 1) {
    const element = document.createElement('p');
    element.innerHTML = text[i];
    main.appendChild(element);
  }
};

export default main;