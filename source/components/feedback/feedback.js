import './feedback.scss';
import '../button/button';

export default function () {
    let sendButton = $('#js_feedback_send'),
        feedbackData = $('.feedback__data'),
        inputs = feedbackData.find($('input')),
        textareas = feedbackData.find($('textarea')),
        message = $('#js_message'),
        messageBg = $('#js_message_bg'),
        messageText = $('#js_message__text'),
        errorMessages = [],
        addError = function(message) {
            errorMessages.push(message);
        },
        customValidation = function (input) {
            let validity = input.validity;
            /*if (validity.patternMismatch) {
                addError('Данные не соответствуют заданному шаблону');
            }
            if (validity.tooLong) {
                let max = input.getAttribute('maxlength');
                addError('Максимальное количество символов: ' + max);
            }
            if (validity.tooShort) {
                let min = input.getAttribute('minlength');
                addError('Минимальное количество символов: ' + min);
            }
            if (validity.typeMismatch) {
                addError('Введенные данные не корректны');
            }*/
            if (validity.valueMissing) {
                addError('Вы заполнили не все поля формы.');
            }
        },
        unique = function(arr) {
            let obj = {};
            for (let i = 0; i < arr.length; i++) {
                let str = arr[i];
                obj[str] = true;
            }
            return Object.keys(obj);
        },
        getMessage =  function() {
            return unique(errorMessages).join('\n');
        };


    return {
        send: function () {
            sendButton.click(function (e) {
                e.preventDefault();

                for (let i = 0; i < inputs.length; i++) {
                    let input = inputs[i];

                    if (input.checkValidity() === false) {
                        customValidation(input);
                    }
                }
                for (let i = 0; i < textareas.length; i++) {
                    let textarea = textareas[i];

                    if (textarea.checkValidity() === false) {
                        customValidation(textarea);
                    }
                }
                if (errorMessages.length > 0) {
                    messageText.text(getMessage());
                    messageBg.css('display', 'block');
                    message.css('display', 'block');
                    errorMessages = [];
                }
                else {
                    /*let ajax = new XMLHttpRequest();
                    ajax.open('GET', '/', true);
                    ajax.onload = function () {
                        messageText.text('Ваше сообщение успешно отправленно!');
                        messageBg.css('display', 'block');
                        message.css('display', 'block');
                    };
                    ajax.onerror = function () {
                        messageText.text('Ошибка при отправке, попробуйте позже!');
                        messageBg.css('display', 'block');
                        message.css('display', 'block');
                    };
                    ajax.send();

                    $.ajax({
                        url: '/',
                        success: function (data, textStatus) {
                            messageText.text('Ваше сообщение успешно отправленно!');
                            messageBg.css('display', 'block');
                            message.css('display', 'block');
                        },
                    });*/

                    messageText.text('Ваше сообщение успешно отправленно!');
                    messageBg.css('display', 'block');
                    message.css('display', 'block');
                }
            });
        },
    };
}