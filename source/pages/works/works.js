import '../../components/loyout/loyout';
import '../../components/app/app';
import '../../components/night/night';
import '../../components/header/header';
import '../../components/works-content/works-content';
import '../../components/footer/footer';

import js_paralax_header from '../../components/header/header';
import js_arrow_scrol from '../../components/loyout/loyout';
import js_feedback from  '../../components/feedback/feedback';

$(document).ready(() => {
    js_paralax_header();
    js_arrow_scrol();
    js_feedback().send();
});



console.log('in works.js');