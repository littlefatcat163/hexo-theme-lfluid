import path from 'path'
import { readYml } from '../utils/ymlConf'
import { vueToHtml, readVue } from '../utils/vueTsr'

const n = (args: string[]) => {
    const [kw] = args
    const tmpPath = path.join(hexo.theme_dir, 'templates', 'n.vue')
    const dataPath = path.join(hexo.base_dir, 'data', 'n')
    const data = readYml(dataPath, true)
    const vueStr = readVue(tmpPath)
    if (data == null || vueStr == null) {
        return '-'
    }
    const mapping = data[kw]
    console.log('---', mapping)
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
hexo.extend.tag.register('n', n, { ends: false, async: true })
