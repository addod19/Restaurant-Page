/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable template-tag-spacing */
/* eslint-disable no-unused-expressions */
const contactUs = () => {
  const content = document.querySelector('#content');
  const contact = document.createElement('div');

  content.appendChild(contact);

  contact.innerHTML = `
    <div class="contact-wrapper">
        <div>You can contact us on the following: facebook instagram phone </div>
    </div>
  `;
};

export default contactUs;