import './login.scss';
import '../input/input';
import '../foto/foto';

export default function () {
    function flip_face() {
        $('#js_login').removeClass('flip');
        $('#js_login_flip_back').show();
    }
    function flip_back() {
        $('#js_login').addClass('flip');
        $('#js_login_flip_back').hide();
    }
    $('#js_login_flip_back').on('click', function(e) {
        e.preventDefault();
        flip_back();
    });
    $('#js_login_flip_face').on('click', function(e) {
        e.preventDefault();
        flip_face();
    });


    window.onload = setTimeout(() =>
    {$('#js_login').addClass('login_show');}
        , 1000);
}