import path from 'path'
import { vueToHtml, readVue } from '../utils/vueTsr'

const note = async (args: string[], content?: string) => {
    let [alertType, iconType] = args
    if (
        !['info', 'success', 'warning', 'danger'].some(
            (item) => item === iconType
        )
    ) {
        iconType = ''
    }
    const html = await hexo.render.render({ text: content, engine: 'markdown' })
    const tmpPath = path.join(hexo.theme_dir, 'templates', 'Note.vue')
    return vueToHtml(readVue(tmpPath)!, { alertType, iconType, html })
}

// @ts-ignore
hexo.extend.tag.register('note', note, { ends: true, async: true })
