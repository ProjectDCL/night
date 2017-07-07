import './message.scss';

export default function () {
    let message = $('#js_message'),
        messageBg = $('#js_message_bg'),
        button = $('#js_message__close');

    $(document).ready(function() {
        button.click(function (e) {
            e.preventDefault();

            messageBg.hide();
            message.hide();
        });
        messageBg.click(function (e) {
            e.preventDefault();

            messageBg.hide();
            message.hide();
        });
    });
}