/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
// import main from './layout/main';

// const content = document.querySelector('#content');
// // content.style.backgroundImage = "url('re.jpg')";
// content.appendChild(main());

// import myNav from './layout/nav';
// import main from './layout/main';
import myNav from './nav';
import main from './main';

const view = (() => {
    myNav();
    main();

    return {
        myNav,
        main,
    }
})();

export default view;