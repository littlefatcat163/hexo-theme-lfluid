;(() => {
    if (!'Viewer' in window) {
        return
    }
    new Viewer(document.getElementById('board'), {
        backdrop: true,
        button: true,
        focus: true,
        fullscreen: true,
        loading: true,
        loop: true,
        keyboard: true,
        moveable: true,
        navbar: false,
        rotatable: true,
        scalable: true,
        slideOnTouch: true,
        title: true,
        toggleOnDblclick: true,
        toolbar: true,
        tooltip: true,
        transition: true,
        zoomable: true,
        zoomOnTouch: true,
        zoomOnWheel: true
    })
})()
