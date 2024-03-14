AFRAME.registerComponent('markerhandler', {
    init: function () {
        this.el.sceneEl.addEventListener('markerFound', () => {
            var button = document.querySelector('.description-button');
            button.style.visibility = 'visible';

        })
    }
});

function descriptionButton() {
    document.querySelector(".description-button").addEventListener("click", function () {
        var description = document.querySelector('.description-window');
        description.style.visibility = 'visible';
    });
}

function buttonCloseDescription() {
    document.querySelector(".btn-close-description").addEventListener("click", function () {
        var button = document.querySelector('.description-window');
        button.style.visibility = 'hidden';
    });
}

window.onload = function () {
    descriptionButton();
    buttonCloseDescription();

};
