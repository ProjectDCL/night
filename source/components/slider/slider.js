import './slider.scss';
import '../button-with-icon/button-with-icon';

const duration = 500,
    defSlide = $.Deferred(),
    defText = $.Deferred(),
    sliderTitle = $('.slider__desc-title'),
    sliderSkills = $('.slider__desc-skills'),
    buttonLeft = $('.slider__button_left'),
    buttonRight = $('.slider__button_right');

let inProgress = false;

const setLink = (container) => {
    let href = container.find('.slider__button-item_active').children('.slider__button-img').data('href'),
        link = container.closest('.slider').find('#js_show_site');

    link.attr('href', href);
};

const animateRow = (str) => {
    let time = 50,
        animate = str.find('span');

    animate.css('opacity', 0);

    animate.each(function () {
        let $this = $(this);
        setTimeout(function () {
            console.log($this);
            $this.addClass('slider__text-animate');
        }, time);
        time = time + 50;
    });

    defText.resolve();
};

const spanRow = (container, str, data) => {
    let row = container.find('.slider__button-item_active').children('.slider__button-img').data(data),
        span = '';

    $.each(row.split(''), function() {
        this === ' ' ? span = span + '<span style="display: inline;">' + this + '</span>' : span = span + '<span>' + this + '</span>';
    });

    str.html(span);
};

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


        $.when(defSlide, defText).done(() => {
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


        $.when(defSlide, defText).done(() => {
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
    });

    defSlide.resolve();
};

export default function () {
    buttonLeft.on('click', function (e) {
        e.preventDefault();

        if(inProgress) return;
        inProgress = true;

        setLink(buttonLeft);
        spanRow(buttonLeft, sliderTitle, 'title');
        animateRow(sliderTitle);
        spanRow(buttonLeft, sliderSkills, 'skills');
        animateRow(sliderSkills);
        sliderShow(buttonLeft);
        moveSlidesLeft(buttonLeft, 'down');
        moveSlidesLeft(buttonRight, 'up');
    });

    buttonRight.on('click', function (e) {
        e.preventDefault();

        if(inProgress) return;
        inProgress = true;

        setLink(buttonRight);
        spanRow(buttonRight, sliderTitle, 'title');
        animateRow(sliderTitle);
        spanRow(buttonRight, sliderSkills, 'skills');
        animateRow(sliderSkills);
        sliderShow(buttonRight);
        moveSlidesRight(buttonLeft, 'down');
        moveSlidesRight(buttonRight, 'up');
    });
}