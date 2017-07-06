import 'normalize.css';
import './loyout.scss';
import '../../fonts/fonts';
import '../wrapper/wrapper';
import '../menu-hamburger/menu-hamburger';

import svg4everybody from 'svg4everybody';
import hamburger from '../button-hamburger/button-hamburger';

svg4everybody();
hamburger();

export default function () {
    let arrow = (function () {
        let arrow_up = $('#js_up'),
            arrow_down = $('#js_down'),
            offset_up = 0,
            offset_down = $('#js_scroll_link_one').offset().top;

        return {
            up: function () {
                $(document).ready(function() {
                    arrow_up.click(function (e) {
                        e.preventDefault();

                        $('body, html').animate({scrollTop: offset_up}, 500);
                    });
                });
            },
            down: function () {
                $(document).ready(function() {
                    arrow_down.click(function (e) {
                        e.preventDefault();

                        $('body, html').animate({scrollTop: offset_down}, 500);
                    });
                });
            },
        };
    }());

    arrow.up();
    arrow.down();
}
