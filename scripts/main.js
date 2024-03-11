AFRAME.registerComponent('markerhandler', {
    init: function () {
        this.el.sceneEl.addEventListener('markerFound', () => {
            // redirect to custom URL e.g. google.com
            window.location = '/Web-AR-game/';
        })
    }
});