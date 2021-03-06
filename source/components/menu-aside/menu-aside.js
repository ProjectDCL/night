import './menu-aside.scss';

export default function () {
    let menuAside = (function () {
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
                        menu = $('.menu-aside');

                    elements.each(function () {
                        let $this = $(this);
                        if (checkDistance(scrollTop, $(this))) {
                            let data_id = $this.data('id');

                            menu.find($('.menu-aside__link')).removeClass('menu-aside__link_active');
                            menu.find('[data-id="' + data_id + '"]').addClass('menu-aside__link_active');
                        }
                    });
                });
            },
            click: function () {
                $(document).ready(function() {
                    $('.menu-aside__link').click(function (e) {
                        e.preventDefault();
                        let $this = $(this),
                            data_id = $this.data('id'),
                            offset = $('.blog-content__article').find('[data-id="' + data_id + '"]').offset().top;

                        $('body, html').animate({scrollTop: offset}, 500);
                    });
                });
            },
        };
    }());

    menuAside.scroll();
    menuAside.click();
}
