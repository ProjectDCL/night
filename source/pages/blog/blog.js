import '../../components/loyout/loyout';
import '../../components/app/app';
import '../../components/night/night';
import '../../components/header/header';
import '../../components/blog-content/blog-content';
import '../../components/footer/footer';
import '../../components/menu-aside-mobile/menu-aside-mobile';

import footer from '../../components/footer/footer';
import js_parallax_header from '../../components/header/header';
import js_menu_aside from '../../components/menu-aside/menu-aside';
import js_menu_aside_mobile from '../../components/menu-aside-mobile/menu-aside-mobile';
import js_blog_content from '../../components/blog-content/blog-content';
import js_arrow_scrol from '../../components/loyout/loyout';

$(document).ready(() => {
    footer();
    js_parallax_header();
    js_menu_aside();
    js_menu_aside_mobile();
    js_blog_content();
    js_arrow_scrol();
});

console.log('in blog.js');
