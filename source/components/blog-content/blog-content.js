import './blog-content.scss';
import '../menu-aside/menu-aside';
import '../article/article';

export default function () {
    let scroll = (function () {
        let menu = $('.blog-content__menu'),
            button = $('#js_blog-content__button-menu'),
            pos = menu.offset().top;

        return {
            init: function () {
                $(window).scroll(function() {
                    if ($(window).scrollTop() > pos) {
                        menu.addClass('blog-content__menu_sticky');
                        button.addClass('blog-content__button-menu_sticky');
                    } else {
                        menu.removeClass('blog-content__menu_sticky');
                        button.removeClass('blog-content__button-menu_sticky');
                    }
                });
            },
        };
    }());

    scroll.init();
}