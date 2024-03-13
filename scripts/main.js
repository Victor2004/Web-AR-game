AFRAME.registerComponent('markerhandler', {
    init: function () {
        this.el.sceneEl.addEventListener('markerFound', () => {
            var button = document.querySelector('.description-button');
            button.style.visibility = 'visible';

        })
    }
});

function descriptionButton() {
    var description = document.querySelector('.description-window');
    document.querySelector(".description-button").addEventListener("click", function () {
        if (description.style.visibility == 'hidden') {
            description.style.visibility = 'visible';
        } else {
            description.style.visibility = 'hidden';
        }
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
