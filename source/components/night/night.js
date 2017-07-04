import './night.scss';

export default function () {
    let paralax = (function () {
        let mountains = document.getElementById('js_parallax_night_mountains');

        return {
            move: function (block, initialX, initialY, amount) {
                let transformString = 'translate(' + initialX*amount + 'px,' + initialY*amount + 'px)',
                    style = block.style;

                style.transform = transformString;
            },
            init: function (initialX, initialY) {
                this.move(mountains, initialX, initialY, 0.01);
            },
        };
    }());

    window.onmousemove = function (e) {
        let initialX = (window.innerWidth / 2) - e.pageX,
            initialY = (window.innerHeight / 2) - e.pageY;

        paralax.init(initialX, initialY);
    };
}