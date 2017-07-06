import './menu-aside-mobile.scss';

export default function () {
    let menuAsideMobile = (function () {
        let checkDistance = function (scrollTop, element) {
            let offset = element.offset().top,
                windowMargin = Math.ceil($(window).height() / 6),
                topBorder = offset - scrollTop - windowMargin,
                bottomEdge = element.outerHeight(true) + offset,
                bottomBorder = scrollTop + windowMargin - bottomEdge;

            return topBorder <= 0 && bottomBorder <= 0;
        };

        return {
            scroll: function () {
                $(window).on('scroll', function () {
                    let scrollTop = $(window).scrollTop(),
                        elements = $('.article'),
                        menu = $('.menu-aside-mobile__list');

                    elements.each(function () {
                        let $this = $(this);
                        if (checkDistance(scrollTop, $(this))) {
                            let data_id = $this.data('id');

                            menu.find($('.menu-aside-mobile__link')).removeClass('menu-aside-mobile__link_active');
                            menu.find('[data-id="' + data_id + '"]').addClass('menu-aside-mobile__link_active');
                        }
                    });
                });
            },
            click: function () {
                $(document).ready(function() {
                    $('.menu-aside-mobile__link').click(function (e) {
                        e.preventDefault();
                        let $this = $(this),
                            data_id = $this.data('id'),
                            offset = $('.blog-content__article').find('[data-id="' + data_id + '"]').offset().top;

                        $('body, html').animate({scrollTop: offset}, 500);
                    });
                });
            },
            toggle: function () {
                let button = $('.menu-aside-mobile__button'),
                    menu = $('.menu-aside-mobile');
                $(document).ready(function() {
                    button.click(function (e) {
                        e.preventDefault();

                        if (menu.hasClass('menu-aside-mobile_show')) {
                            menu.removeClass('menu-aside-mobile_show').addClass('menu-aside-mobile_hide');
                        } else if (menu.hasClass('menu-aside-mobile_hide')){
                            menu.removeClass('menu-aside-mobile_hide').addClass('menu-aside-mobile_show');
                        } else {
                            menu.removeClass('menu-aside-mobile_hide').addClass('menu-aside-mobile_show');
                        }
                    });
                });
            },
        };
    }());

    menuAsideMobile.scroll();
    menuAsideMobile.click();
    menuAsideMobile.toggle();
}