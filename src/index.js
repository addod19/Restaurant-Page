/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
const nav = () => {
    // eslint-disable-next-line indent
    `<nav>
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>
    </nav>`;
};

// const main = () => {
//     console.log('hi am main');
// };

// const footer = () => {
//     console.log('i am footer');
// };

const content = document.querySelector('#content');
content.appendChild(nav());