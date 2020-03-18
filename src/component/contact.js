/* eslint-disable linebreak-style */
const contact = () => {
  const content = document.getElementById('content');

  const container = document.createElement('div');
  container.className = 'contactContainer';
  content.appendChild(container);

  const textContent = document.createElement('div');
  textContent.className = 'textContent';
  container.appendChild(textContent);

  const contactHeading = document.createElement('h1');
  contactHeading.innerText = 'CONTACT';
  textContent.appendChild(contactHeading);

  const subText = document.createElement('h2');
  subText.innerText = 'RESTAURANT KROMOSOME';
  textContent.appendChild(subText);

  const elementText = ['ACCRA', 'DANSOMAN FIRST-STOP', 'GHANA', '+233 207 312 909', 'kromo@info.com'];

  for (let i = 0; i < elementText.length; i += 1) {
    const contactElement = document.createElement('h4');
    contactElement.innerText = elementText[i];
    textContent.appendChild(contactElement);
  }
};

export default contact;