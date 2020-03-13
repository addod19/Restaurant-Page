import _ from 'lodash';
import './style.css';
import addo from './images/bigS.png';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myAddo = new Image();
    myAddo.src = addo;

    element.appendChild(myAddo);

    return element;
}

document.body.appendChild(component());
console.log('welcome to webpack by daniel!!!');