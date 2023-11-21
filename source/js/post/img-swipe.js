import PhotoSwipeLightbox from '//lib.baomitu.com/photoswipe/5.4.2/photoswipe-lightbox.esm.min.js';

const imgs = document.querySelectorAll('.markdown-body img')
const promiseds = Array.prototype.map.call(imgs, (item) => {
    return new Promise((resolve, reject) => {
        const src = item.getAttribute('src')
        const __img = new Image()
        __img.onload = function () {
            const a = document.createElement('a')
            a.href = src
            a.target = '_blank'
            a.setAttribute('data-pswp-src', src)
            a.setAttribute('data-pswp-width', __img.width)
            a.setAttribute('data-pswp-height', __img.height)
            const parentNode = item.parentNode
            parentNode.insertBefore(a, item)
            parentNode.removeChild(item)
            a.appendChild(item)
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
        pswpModule: () => import('//lib.baomitu.com/photoswipe/5.4.2/photoswipe.esm.min.js'),
        wheelToZoom: true,
    })
    lightbox.init()
})
