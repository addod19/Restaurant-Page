/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
const home = () => {
  const content = document.querySelector('#content');
  const homePage = document.createElement('div');

  content.appendChild(homePage);

  homePage.innerHTML = `
    <h2>This is testing</h2>
  `;
};

export default home;