import './login.scss';
import '../input/input';
import '../foto/foto';

export default function () {
    let login = $('#js_login'),
        loginFlipBack = $('#js_login_flip_back'),
        loginFlipFace = $('#js_login_flip_face'),
        heroFlipFace = $('#js_hero_flip_face'),
        sendButton = $('#js_go_login'),
        feedbackData = $('.login__data'),
        inputs = feedbackData.find($('input')),
        manCheck = $('input[name=js_man]'),
        manSure = $('input[name=js_man_sure]'),
        message = $('#js_message'),
        messageBg = $('#js_message_bg'),
        messageText = $('#js_message__text'),
        errorMessages = [],
        addError = function(message) {
            errorMessages.push(message);
        },
        customValidation = function (input) {
            let validity = input.validity;

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
        },
        checkCaptcha = function () {
            if (!manCheck.prop('checked') || !manSure[0].checked) {
                addError('Роботам здесь не место.');
            }
        },
        flipFace = function () {
            login.removeClass('flip');
            loginFlipBack.show();
        },
        flipBback = function () {
            login.addClass('flip');
            loginFlipBack.hide();
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
                checkCaptcha();
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
                     messageText.text('Добро пожаловать!');
                     messageBg.css('display', 'block');
                     message.css('display', 'block');
                     };
                     ajax.onerror = function () {
                     messageText.text('Ошибка авторизации, попробуйте позже!');
                     messageBg.css('display', 'block');
                     message.css('display', 'block');
                     };
                     ajax.send();

                     $.ajax({
                     url: '/',
                     success: function (data, textStatus) {
                     messageText.text('Добро пожаловать!');
                     messageBg.css('display', 'block');
                     message.css('display', 'block');
                     },
                     });*/

                    messageText.text('Добро пожаловать!');
                    messageBg.css('display', 'block');
                    message.css('display', 'block');
                }
            });
        },
        flip: function () {
            loginFlipBack.click(function(e) {
                e.preventDefault();
                flipBback();
            });

            loginFlipFace.click(function(e) {
                e.preventDefault();
                flipFace();
            });
            heroFlipFace.click(function(e) {
                e.preventDefault();
                flipFace();
            });
        },
    };
}