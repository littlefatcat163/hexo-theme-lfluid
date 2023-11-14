LNote.events = {
    registerNavbarEvent() {
        const $navbar = document.getElementById('navbar')
        if (!$navbar) {
            return
        }

        function $navUd() {
            const top = window.scrollY || document.documentElement.scrollTop
            if (top > 0) {
                $navbar.classList.remove('navbar-dark')
                if (top > 50) {
                    $navbar.classList.add('top-nav-collapse')
                } else {
                    $navbar.classList.remove('top-nav-collapse')
                }
            } else {
                $navbar.classList.add('navbar-dark')
            }
        }
        $navUd()
        LNote.utils.listenScroll($navUd)

        document
            .getElementById('navbar-toggler-btn')
            .addEventListener('click', (e) => {
                document
                    .querySelector('.animated-icon')
                    .classList.toggle('open')
                $navbar.classList.toggle('navbar-col-show')
            })
    },

    /* registerImageLoadedEvent: function () {
        if (!('NProgress' in window)) {
            return
        }

        var bg = document.getElementById('banner')
        if (bg) {
            var src = bg.style.backgroundImage
            var url = src.match(/\((.*?)\)/)[1].replace(/(['"])/g, '')
            var img = new Image()
            img.onload = function () {
                window.NProgress && window.NProgress.inc(0.2)
            }
            img.src = url
            if (img.complete) {
                img.onload()
            }
        }

        var notLazyImages = jQuery('main img:not([lazyload])')
        var total = notLazyImages.length
        for (const img of notLazyImages) {
            const old = img.onload
            img.onload = function () {
                old && old()
                window.NProgress && window.NProgress.inc(0.5 / total)
                img.onload = null
            }
            if (img.complete) {
                img.onload()
            }
        }
    }, */
}

document.addEventListener('DOMContentLoaded', function () {
    LNote.events.registerNavbarEvent()
    // LNote.events.registerImageLoadedEvent()
})
