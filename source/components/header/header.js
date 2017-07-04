import './header.scss';
import '../foto/foto';
import '../social/social';
import '../title-icon/title-icon';

import js_paralax_night from '../night/night';
js_paralax_night();

export default function () {
    let paralax = (function () {
        let bg = document.getElementById('js_parallax_night'),
            user = document.getElementById('js_parallax_hero');

        return {
            move: function (block, windowsScroll, amount) {
                let strafe = windowsScroll / -amount + '%',
                    transformString = 'translate3d(0,' + strafe + ', 0)',
                    style = block.style;

                style.transform = transformString;
                style.webkitTransform = transformString;
            },
            init: function (wScroll) {
                this.move(bg, wScroll, -30);
                this.move(user, wScroll, 5);
            },
        };
    }());

    window.onscroll = function () {
        let wScroll = window.pageYOffset;
        paralax.init(wScroll);
    };
}