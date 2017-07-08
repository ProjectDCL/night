import './slider.scss';
import '../button-with-icon/button-with-icon';

const duration = 500,
    defSlide = $.Deferred(),
    defText = $.Deferred();
let inProgress = false,
    buttonLeft = $('.slider__button_left'),
    buttonRight = $('.slider__button_right');

const moveSlidesLeft = (container, direction) => {
    let items = container.find('.slider__button-item'),
        activeItem = items.filter('.slider__button-item_active'),
        strafeTopPercents = direction === 'down' ? 100 : -100,
        counter = activeItem.index();

    counter--;

    if(counter < 0) counter = items.length - 1;
    const reqItem = items.eq(counter);

    activeItem.animate({
        'top': `${strafeTopPercents}%`,
    }, duration);

    reqItem.animate({
        'top': '0',
    }, duration, function() {
        activeItem.removeClass('slider__button-item_active')
            .css('top', `${-strafeTopPercents}%`);
        $(this).addClass('slider__button-item_active');


        $.when(defSlide).done(() => {
            inProgress = false;
        });
    });
};

const moveSlidesRight = (container, direction) => {
    let items = container.find('.slider__button-item'),
        activeItem = items.filter('.slider__button-item_active'),
        strafeTopPercents = direction === 'down' ? 100 : -100,
        counter = activeItem.index();

    counter++;

    if(counter >= items.length) counter = 0;
    const reqItem = items.eq(counter);

    activeItem.animate({
        'top': `${strafeTopPercents}%`,
    }, duration);

    reqItem.animate({
        'top': '0',
    }, duration, function() {
        activeItem.removeClass('slider__button-item_active')
            .css('top', `${-strafeTopPercents}%`);
        $(this).addClass('slider__button-item_active');


        $.when(defSlide).done(() => {
            inProgress = false;
        });
    });
};

const sliderShow = (container) => {
    const display = container.closest('.slider').find('.slider__display-img'),
        preloader = container.closest('.slider').find('.slider__preloader'),
        path = container.find('.slider__button-item_active').children('.slider__button-img').data('img'),
        fadedOut = $.Deferred(),
        loaded = $.Deferred();

    display.fadeOut(function () {
        fadedOut.resolve();
    });

    fadedOut.done(() => {
        preloader.show();
        display.attr('src', path).on('load', () => {
            loaded.resolve();
        });
    });

    loaded.done(() => {
        preloader.hide(400);
        display.show(400);
        defSlide.resolve();
    });
};

export default function () {
    buttonLeft.on('click', function (e) {
        e.preventDefault();

        if(inProgress) return;
        inProgress = true;

        sliderShow(buttonLeft);
        moveSlidesLeft(buttonLeft, 'down');
        moveSlidesLeft(buttonRight, 'up');
    });

    buttonRight.on('click', function (e) {
        e.preventDefault();

        if(inProgress) return;
        inProgress = true;

        sliderShow(buttonRight);
        moveSlidesRight(buttonLeft, 'down');
        moveSlidesRight(buttonRight, 'up');
    });
}