/* eslint-disable prefer-template */
/* eslint-disable no-useless-concat */
/* eslint-disable prefer-const */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
// import styles from '../css/style.css';

const menu = () => {
  const content = document.getElementById('content');

  const firstDiv = document.createElement('div');
  firstDiv.className = 'container';

  content.appendChild(firstDiv);

  const row = document.createElement('div');
  row.className = 'row mt-4';

  firstDiv.appendChild(row);

  const col = document.createElement('div');
  const col2 = document.createElement('div');
  const col3 = document.createElement('div');
  const col4 = document.createElement('div');
  const col5 = document.createElement('div');
  const col6 = document.createElement('div');

  row.appendChild(col);
  row.appendChild(col2);
  row.appendChild(col3);
  row.appendChild(col4);
  row.appendChild(col5);
  row.appendChild(col6);
  
  col.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select';
  col2.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select';
  col3.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select';
  col4.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select';
  col5.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select';
  col6.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select';

  let colSelect = document.querySelectorAll('.select');
  const imgArr = ['res', 'res1', 'res2', 're1', 'res4', 're1', 're2'];
  const desc = ['Jollof Rice', 'Banku and Okro', 'Akple and Fetri detsi', 'Beef Balls', 'Goat Soup', 'Salad'];
  const price = [20, 44, 33, 23, 12, 56, 100, 54];
  for (let i = 0; i < 6; i += 1) {
    const description = `${desc[i] + ' ' + '$' + price[i]}`;

    const pdt = document.createElement('div');
    pdt.className = 'product';
    colSelect[i].appendChild(pdt);

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