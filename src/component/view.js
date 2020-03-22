/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
// import main from './layout/main';

import myNav from './nav';
import home from './home';

const view = (() => {
    myNav();
    home();

    return {
        myNav,
        home,
    }
})();

export default view;