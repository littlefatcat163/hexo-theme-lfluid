import path from 'path'
import _ from 'lodash'
import { igRowCol } from '../utils/hexoTagArgs'
import { vueToHtml, readVue } from '../utils/vueTsr'

const groupImage = (args: string[], content: string) => {
    const list: { title: string; url: string }[] = []
    content.split(/\n/).forEach((item) => {
        const matchs = /!\[(.*?)\]\((.*?)\)/g.exec(item)
        if (_.isEmpty(matchs)) {
            return
        }
        const [, title, url] = matchs!
        list.push({
            title,
            url,
        })
    })

    const rowCol = igRowCol(list.length)
    const isSameSize = args[0] === 'same'

    const tmpPath = path.join(hexo.theme_dir, 'templates', 'GroupImage.vue')
    return vueToHtml(readVue(tmpPath)!, { rowCol, isSameSize, list })
}

// @ts-ignore
hexo.extend.tag.register('gi', groupImage, { ends: true, async: true })
