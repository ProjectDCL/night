import './button-hamburger.scss';

export default function () {
    jQuery(document).ready(function($) {
        $('.button-hamburger').click(function() {
            $(this).toggleClass('on');
            $('.main-menu').slideToggle();
            return false;
        });
    });
}