;(() => {
    const imgs = document.querySelectorAll('.markdown-body :not(a) > img')
    const promiseds = Array.prototype.map.call(imgs, (item) => {
        return new Promise((resolve, reject) => {
            const src = item.getAttribute('src')
            const __img = new Image()
            __img.onload = function () {
                $(item)
                    .wrap(
                        `<a href="${src}" target="_blank" data-pswp-src="${src}" data-pswp-width="${__img.width}" data-pswp-height="${__img.height}"></a>`
                    )
                    .parent('a')
                resolve()
            }
            __img.onerror = function () {
                reject()
            }
            __img.src = src
        })
    })

    Promise.allSettled(promiseds).then(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#board',
            children: 'a[data-pswp-src]',
            pswpModule: () => PhotoSwipe,
            wheelToZoom: true,
        })
        lightbox.init()
        lightbox.on('initialLayout', () => {
            $('.pswp').on('contextmenu.fb', function (e) {
                if (e.button == 2) {
                    e.preventDefault()
                }
                return true
            })
        })
        /* lightbox.on('destroy', () => {
      console.log('destroy');
    }); */
    })
})()
