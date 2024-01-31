import PhotoSwipeLightbox from '//cdn.staticfile.net/photoswipe/5.4.2/photoswipe-lightbox.esm.min.js'

const lightbox = new PhotoSwipeLightbox({
    pswpModule: () => import('//cdn.staticfile.net/photoswipe/5.4.2/photoswipe.esm.min.js'),
    wheelToZoom: true,
})
const groups = []

const imgClick = (event) => {
    const dataSwipeI = Number.parseInt(event.target.getAttribute('data-swipe-i'))
    const dataSwipeGi = event.target.getAttribute('data-swipe-gi')
    lightbox.loadAndOpen(dataSwipeI, groups[dataSwipeGi])
}

function imgToData($img, groupIndex, index) {
    return new Promise((resolve, reject) => {
        $img.setAttribute('data-swipe-gi', groupIndex)
        $img.setAttribute('data-swipe-i', index)
        const src = $img.getAttribute('src')
        const alt = $img.getAttribute('alt')
        const data = { src, alt }
        const loadDone = () => {
            groups[groupIndex][index] = {
                ...data,
                width: $img.naturalWidth,
                height: $img.naturalHeight,
            }
            resolve()
            $img.onclick = imgClick
        }
        if ($img.complete) {
            loadDone()
        } else {
            $img.onload = loadDone
        }

        $img.onerror = () => {
            reject()
        }
    })
}

const promiseds = []

document.querySelectorAll('.img-swipe-single').forEach($img => {
    const groupIndex = groups.length
    groups.push([{}])
    promiseds.push(imgToData($img, groupIndex, 0))
})

document.querySelectorAll('.img-swipe-group').forEach($group => {
    const groupIndex = groups.length
    groups.push([])
    $group.querySelectorAll('img').forEach(($img, index) => {
        groups[groupIndex].push({})
        promiseds.push(imgToData($img, groupIndex, index))
    })
})

if (promiseds.length === 0) {
    throw new Error('empty img')
}

Promise.allSettled(promiseds).then(() => {
    lightbox.on('uiRegister', () => {
        lightbox.pswp.ui.registerElement({
            name: 'custom-caption',
            className: 'lnote-lightbox-caption',
            order: 9,
            isButton: false,
            appendTo: 'root',
            html: null,
            onInit(el, pswp) {
                pswp.on('change', () => {
                    if (pswp.currSlide.data.alt == null) {
                        return
                    }
                    el.innerHTML = `<div>${pswp.currSlide.data.alt}</div>`
                })
            },
        })
    })
    lightbox.init()
})