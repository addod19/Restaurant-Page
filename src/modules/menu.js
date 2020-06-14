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
  row.append(col, col2, col3, col4, col5, col6);
  col.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select neu p-2';
  col2.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select neu p-2';
  col3.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select neu p-2';
  col4.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select neu p-2';
  col5.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select neu p-2';
  col6.className = 'col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select neu p-2';
  const colSelect = document.querySelectorAll('.select');
  const imgArr = ['res', 'res1', 'res2', 're1', 'res4', 're1', 're2'];
  const desc = ['Jollof Rice', 'Banku and Okro', 'Akple and Fetri detsi', 'Beef Balls', 'Goat Soup', 'Salad'];
  const price = [20, 44, 33, 23, 12, 56, 100, 54];
  for (let i = 0; i < 6; i += 1) {
    const description = `${`${desc[i]} `.concat(`$${price[i]}`)}`;

    const pdt = document.createElement('div');
    pdt.className = 'product';
    colSelect[i].appendChild(pdt);

    const img = new Image();
    
    img.setAttribute('src', `https://addod19.github.io/Restaurant-Page/images/${imgArr[i]}.jpg`);
    img.className = 'img img-rounded';
    pdt.appendChild(img);

    const descrip = document.createElement('p');
    descrip.className = 'description bg-icon font-weight-bold';
    descrip.textContent = description;
    pdt.appendChild(descrip);
  }
};

export default menu;