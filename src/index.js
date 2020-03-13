import _ from 'lodash';
import './style.css';
import addo from './images/bigS.png';
import Data from './data.xml';
import header from '../component/header';
import main from '../component/main';

const container = (() => {
    header();
    main();
    const greeting = () => {
        const element = document.createElement('div');

        element.innerHTML = _.join(['Hello', 'webpack', 'team24BBssss'], ' ');
        element.classList.add('hello');

        const myImage = new Image();
        myImage.src = addo;

        element.appendChild(myImage);

        console.log(Data);
    }

    return {greeting, header, main};
})();

// container.appendChild(intro());

document.body.appendChild(container());
