import './blog-content.scss';
import '../menu-aside/menu-aside';
import '../article/article';

export default function () {
    let menuScroll = (function () {
        let menu = $('.blog-content__menu'),
            button = $('.blog-content__button-menu'),
            pos = menu.offset().top;

        menu.width(menu.width());

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

    let menuShow = (function () {
        let button = $('#js_blog-content__button-menu'),
            element = $('.blog-content__menu');

        return {
            init: function () {
                button.on('click', function (e) {
                    e.preventDefault();

                    if (element.hasClass('blog-content__menu_show') || button.hasClass('blog-content__button-menu_show')) {
                        element.removeClass('blog-content__menu_show');
                        button.removeClass('blog-content__button-menu_show');
                        element.addClass('blog-content__menu_hide');
                        button.addClass('blog-content__button-menu_hide');
                    } else {
                        element.removeClass('blog-content__menu_hide');
                        button.removeClass('blog-content__button-menu_hide');
                        element.addClass('blog-content__menu_show');
                        button.addClass('blog-content__button-menu_show');
                    }
                });
            },
        };

    }());

    menuScroll.init();
    menuShow.init();
}