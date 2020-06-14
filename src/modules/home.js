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
  introC4.className = 'col-xs-12 col-sm-12 col-md-5 col-lg-4 cb';

  const aside = document.createElement('aside');
  aside.className = 'jumbotron custom neu';

  const introC8 = document.createElement('div');
  introC8.className = 'col-xs-12 col-sm-12 col-md-7 col-lg-8 mb-3 bgm';
  introC8.backgroundImage = "url('https://addod19.github.io/Restaurant-Page/images/re.jpg')";

  const sliderContainer = document.createElement('main');
  sliderContainer.className = 'main-bg';

  introWrap.appendChild(introR);
  introR.append(introC4, introC8);
  introC4.appendChild(aside);
  introC8.appendChild(sliderContainer);

  const heading = document.createElement('h2');
  heading.innerHTML = `
  <i class="fa fa-cutlery mt-3 mr-2" aria-hidden="true"></i><span class="mt-2">YOU ARE WELCOME !!!</span><i class="fa fa-btc mt-3 ml-2"></i>`;
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