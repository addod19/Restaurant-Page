/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
// import styles from '../css/style.css';

const menu = () => {
  const container = document.getElementById('content');
  // container.className = styles['menu-main'];

  const menuHeader = document.createElement('h1');
  menuHeader.className = 'menuHead';
  menuHeader.innerText = 'MENU';

  const menuContainer = document.createElement('div');
  menuContainer.className = 'menuContainer';
  container.appendChild(menuContainer);
  
  const imgArr = ['res', 'res1', 'res2', 'res3', 'res4', 're1', 're2'];
  const desc = ['Jollof Rice', 'Banku and Okro', 'Akple and Fetri detsi', 'Beef Balls', 'Goat Soup', 'Salad'];
  const price = [20, 44, 33, 23, 12, 56, 100, 54];
  for (let i = 0; i < 6; i += 1) {
    
    const description = `${desc[i] + ' ' + '$' + price[i]}`;

    const pdt = document.createElement('div');
    pdt.className = 'product';
    menuContainer.appendChild(pdt);
    // console.log(menuContainer);

    const img = new Image();
    img.setAttribute('src', `/dist/images/${imgArr[i]}.jpg`);
    img.className = 'img img-rounded';
    pdt.appendChild(img);

    const descrip = document.createElement('p');
    descrip.className = 'description';
    descrip.innerText = description;
    pdt.appendChild(descrip);
  }
};

export default menu;