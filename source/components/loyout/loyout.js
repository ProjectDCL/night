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
    let loyout = (function () {
        let arrow_up = $('#js_up'),
            arrow_down = $('#js_down'),
            offset_up = 0,
            offset_down = $('#js_scroll_link_one').offset().top,
            images = document.images,
            images_total_count = images.length,
            images_loaded_count = 0,
            preloader = $('.preloader'),
            preloader__loader = $('.preloader__loader'),
            preloader__circle_second = $('.preloader__circle-second'),
            preloader__circle_external = $('.preloader__circle-external'),
            images_loaded = function () {
                images_loaded_count++;

                let percent = ((100 / images_total_count * images_loaded_count) << 0);
                if (percent >= 1) {
                    preloader__circle_external.addClass('preloader__circle-external_rotation');
                }
                preloader__loader.text(percent + '%');
                preloader__circle_second.css('stroke-dasharray', (percent * 282.6 / 100) + ' 282.6');

                if(images_loaded_count >= images_total_count) {
                    setTimeout(function () {
                        if( !preloader.hasClass('preloader_done')) {
                            preloader.addClass('preloader_done');
                            $('#js_login').addClass('login_show');
                        }
                    }, 1500);
                }
            };


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
            preload: function () {
                $(document).ready(function() {
                    for(let i = 0; i < images_total_count; i++) {
                        let image_clone = new Image();
                        image_clone.onload = images_loaded;
                        image_clone.onerror = images_loaded;
                        image_clone.src = images[i].src;
                    }
                });
            },
        };
    }());

    loyout.up();
    loyout.down();
    loyout.preload();
}
