import path from 'path'
import { readYml } from '../utils/ymlConf'
import { vueToHtml, readVue } from '../utils/vueTsr'
import type { NounContent, Type } from '../../types/tag'

/**
 * @description 名词
 * @param {string[]} args 数组
 *  - key 关键字，唯一，匹配显示内容
 *  - dataSource 数据源 yml 文件 或者 目录（为什么要加，提醒开发者知道数据来源）
 * @returns {Promise} vue
 */
const noun = async (args: string[]) => {
    const [kw, dataSource] = args
    
    const tmpPath = path.join(hexo.theme_dir, 'templates', 'noun.vue')
    const dataPath = path.join(hexo.base_dir, dataSource)
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

    const type = mapping.type as Type
    const language = (hexo.theme.i18n.data as any)[hexo.config.language]
    const promptText = language['noun.prompt']
    const moreText = language['noun.more']
    const nounContent: NounContent = {
        type,
        promptText,
        moreText,
        title: mapping.title,
        text: mapping.text,
        link: mapping.link,
    }
    const cTmpPath = path.join(hexo.theme_dir, 'templates', 'nounContent.vue')
    const content = await vueToHtml(readVue(cTmpPath)!, { ...nounContent })

    return vueToHtml(vueStr, { type, text, content })
}

// {% n key dataSource %}
// @ts-ignore
hexo.extend.tag.register('noun', noun, { ends: false, async: true })
