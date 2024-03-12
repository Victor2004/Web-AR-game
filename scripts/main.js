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

// Функция для получения текущих координат
function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Геолокация не поддерживается вашим браузером.");
    }
}

// Функция для отображения координат
function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // Вывод координат
    console.log("Ваши текущие координаты:");
    console.log("Широта:", latitude);
    console.log("Долгота:", longitude);
    alert("Широта: " + latitude + " Долгота: " + longitude);

    // Замена координат в коде
    var code = document.getElementById("your-coordinates");
    code.innerHTML = code.innerHTML.replace("<your-lat>", latitude).replace("<your-loon>", longitude);
}

window.onload = function () {
    descriptionButton();
    buttonCloseDescription();

};
getCurrentLocation();
