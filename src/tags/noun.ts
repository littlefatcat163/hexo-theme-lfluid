import path from 'path'
import { readYml } from '../utils/ymlConf'
import { vueToHtml, readVue } from '../utils/vueTsr'

const noun = (args: string[]) => {
    const [kw] = args
    const tmpPath = path.join(hexo.theme_dir, 'templates', 'noun.vue')
    const dataPath = path.join(hexo.base_dir, 'data', 'noun')
    const data = readYml(dataPath, true)
    const vueStr = readVue(tmpPath)
    if (data == null || vueStr == null) {
        return '-'
    }
    const mapping = data[kw]
    if (mapping == null) {
        return '-'
    }
    let text = `[${kw}]`
    if (mapping.title != null) {
        text += ` ${mapping.title}`
    }

    return vueToHtml(vueStr, { ...mapping, text })
}

// {% n key %}
hexo.extend.tag.register('noun', noun, { ends: false, async: true })
