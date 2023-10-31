import { igRowCol } from '../utils/hexoTagArgs'

const groupImage = (args: string[], content?: string) => {
    const imgsSameSize = args[0] === 'same'

    content = hexo.render.renderSync({ text: content, engine: 'markdown' })

    let images: string[] = content.match(/<img[\s\S]*?>/g)!
    const rowCol = igRowCol(images.length)
    if (rowCol === 1) {
        return images[0]
    }
    if (imgsSameSize) {
        images = images.map((item) => {
            return `<div class="col">${item}</div>`
        })
    } else {
        images = images.map((item) => {
            return `<div class="col"><div class="image-adapter"><div>${item}</div></div></div>`
        })
    }

    return `<div class="container group-image-container"><div class="row row-cols-${rowCol} gx-2 gy-2">${images.join(
        ''
    )}</div></div>`
}

/*
  {% groupimage total n1-n2-n3-... %}
  ![](url)
  ![](url)
  ![](url)
  {% endgroupimage %}
 */
hexo.extend.tag.register('gi', groupImage, { ends: true })
