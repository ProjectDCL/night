import './button-hamburger.scss';

export default function () {
    let menuHamburger = (function () {
        let menu = $('.main-menu'),
            menu_hamburger = $('.menu-hamburger'),
            list_item = menu_hamburger.find($('.menu-hamburger__link')),
            button = $('.button-hamburger'),
            time = 100,
            hide = function () {
                button.toggleClass('on');
                menu_hamburger.addClass('menu-hamburger_right-hide').addClass('menu-hamburger_left-hide');
                list_item.removeClass('menu-hamburger__link-show');
                menu_hamburger.removeClass('menu-hamburger_left').removeClass('menu-hamburger_right');
                setTimeout(() => {menu.removeClass('main-menu_show').addClass('main-menu_hide');}, 700);
            },
            show = function () {
                button.toggleClass('on');
                menu.removeClass('main-menu_hide').addClass('main-menu_show');
                menu_hamburger.removeClass('menu-hamburger_right-hide')
                    .removeClass('menu-hamburger_left-hide')
                    .addClass('menu-hamburger_left').addClass('menu-hamburger_right');

                setTimeout(function () {
                    [].slice.call(list_item).forEach(function(item){
                        setTimeout(function () {
                            item.className += ' menu-hamburger__link-show';
                        }, time);
                        time = time + 100;
                    });
                }, 800);
            };

        return {
            click: function () {
                button.click(function(e) {
                    e.preventDefault();

                    if (menu.hasClass('main-menu_show')) {
                        hide();
                    } else if (menu.hasClass('main-menu_hide')) {
                        show();
                    } else {
                        show();
                    }

                    return false;
                });
            },
        };
    }());

    menuHamburger.click();
}
