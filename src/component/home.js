/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const home = () => {
  const content = document.getElementById('content');

  const container = document.createElement('div');
  container.className = 'container main1';
  content.appendChild(container);

  const main = document.createElement('div');
  main.className = 'main row pt-2 mt-2';
  container.appendChild(main);

  const introWrap = document.createElement('div');
  introWrap.className = 'container';

  const introR = document.createElement('div');
  introR.className = 'row mt-4';

  const introC4 = document.createElement('div');
  introC4.className = 'col-xs-12 col-sm-12 col-md-3 col-lg-4';

  const aside = document.createElement('aside');
  aside.className = 'jumbotron custom neu';

  const introC8 = document.createElement('div');
  introC8.className = 'col-xs-12 col-sm-12 col-md-9 col-lg-8';

  const sliderContainer = document.createElement('div');
  sliderContainer.className = 'slideshow-container neu';

  const mySlides = document.createElement('div');
  mySlides.className = 'mySlides fade';
  mySlides.style.backgroundImage = '../dist/images/res1.jpg';

  const slidImg = new Image();
  slidImg.setAttribute('src', '../dist/images/res2.jpg');

  const slidDesc = document.createElement('div');
  slidDesc.className = 'text';
  slidDesc.innerHTML = '<span>$400</span>';

  introC8.appendChild(sliderContainer);
  sliderContainer.appendChild(mySlides);
  mySlides.appendChild(slidImg);
  mySlides.appendChild(slidDesc);


  introWrap.appendChild(introR);
  introR.appendChild(introC4);
  introR.appendChild(introC8);
  introC4.appendChild(aside);

  const heading = document.createElement('h2');
  heading.innerHTML = `
  <i class="fa fa-cutlery mt-3 mr-2" aria-hidden="true"></i><span class="mt-2">YOU ARE WELCOME !!!</span><i class="fa fa-btc mt-3 ml-2"></i>

  `;
  heading.className = 'heading text-center';
  main.appendChild(heading);

  const text = ['We have a variety of local and continental dishes you can choose from',
      'Free delivery within Accra and Tema', '+233207312909'];
  for (let i = 0; i < text.length; i += 1) {
    const element = document.createElement('p');
    element.innerHTML = text[i];
    aside.appendChild(element);
  }
  main.appendChild(introWrap);


};

export default home;