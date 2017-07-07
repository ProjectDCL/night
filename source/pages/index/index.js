import './index.scss';

import '../../components/loyout/loyout';
import '../../components/app/app';
import '../../components/hero/hero';
import '../../components/night/night';
import '../../components/footer/footer';

import js_flip_login from '../../components/login/login';
import js_arrow_scrol from '../../components/loyout/loyout';

js_flip_login().flip();
js_flip_login().send();
js_arrow_scrol();

console.log('in index.js');