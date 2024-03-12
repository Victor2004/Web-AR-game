AFRAME.registerComponent('markerhandler', {
    init: function () {
        this.el.sceneEl.addEventListener('markerFound', () => {
            var button = document.querySelector('.description-button');
            button.style.visibility = 'visible';

        })
    }
});

window.onload = function () {
    document.querySelector(".description-button").addEventListener("click", function () {
        var description = document.querySelector('.description-window');
        description.style.visibility = 'visible';
    });

    document.querySelector(".btn-close-description").addEventListener("click", function () {
        var button = document.querySelector('.description-window');
        button.style.visibility = 'hidden';
    });
};
