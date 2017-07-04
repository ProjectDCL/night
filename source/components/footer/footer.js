import './footer.scss';
import '../menu/menu';
import '../social/social';
import '../contact/contact';

export default function () {
    jQuery(document).ready(function($) {
        var js_footer = $('#js_footer'),
            footer = $('.footer');

        js_footer.height(footer.height());

        $(window).resize(function () {
            js_footer.height(footer.height());
        });

        return false;
    });
}