import { igRowCol } from '../utils/hexoTagArgs'
import { imgElGlobalClass } from '../utils/htmlEl'

const groupImage = (args: string[], content: string) => {
    const imgsSameSize = args[0] === 'same'

    content = hexo.render.renderSync({ text: content, engine: 'markdown' })

    let images: string[] = content.match(/<img[\s\S]*?>/g)!
    const rowCol = igRowCol(images.length)
    if (rowCol === 1) {
        return `<div class="group-image-container">${imgElGlobalClass(images[0], ['w-100 img-swipe-single'])}</div>`
    }
    if (imgsSameSize) {
        images = images.map((item) => {
            return `<div class="col">${imgElGlobalClass(item)}</div>`
        })
    } else {
        images = images.map((item) => {
            return `<div class="col"><div class="image-adapter"><div>${imgElGlobalClass(
                item
            )}</div></div></div>`
        })
    }

    return `<div class="group-image-container img-swipe-group"><div class="row row-cols-${rowCol} gx-2 gy-2">${images.join(
        ''
    )}</div></div>`
}

/*
  {% gi %}
  ![](url)
  ![](url)
  ![](url)
  {% endgi %}
 */
hexo.extend.tag.register('gi', groupImage, { ends: true })
