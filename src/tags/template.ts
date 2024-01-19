import path from 'path'
import { readYml } from '../utils/ymlConf'
import { vueToHtml, readVue } from '../utils/vueTsr'

/**
 * @description 模板
 * @param {string[]} args 数组
 *  - tmpFile 模板文件，支持 vue、~ejs模板将要放弃的~
 *  - dataFile 数据文件
 *  - isTheme 是否主题下的模板，默认是false，true表示用主题下的模板，引用路径为 lonte/templates
 * @returns 
 */
const template = (args: string[]) => {
    const [tmpFile, dataFile, isTheme] = args
    const dataPath = path.join(hexo.base_dir, 'src', 'data', dataFile)
    const data = readYml(dataPath)

    let tmpPath = path.join(hexo.base_dir, 'src', 'templates', tmpFile)
    if (isTheme === 'true') {
        tmpPath = path.join(hexo.theme_dir, 'templates', tmpFile)
    }

    if (/\.vue$/.test(tmpFile)) {
        const vueStr = readVue(tmpPath)
        if (vueStr == null) {
            return '-'
        }
        return vueToHtml(vueStr, data)
    }
    return hexo.render.render({ path: tmpPath }, data)
}

// {% template tmpFile dataFile %}
hexo.extend.tag.register('template', template, { ends: false, async: true })
