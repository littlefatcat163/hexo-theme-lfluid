import path from 'path'
import _ from 'lodash'
import type { TabStash } from '../../types/tag'
import { noEndingArgs } from '../utils/hexoTagArgs'
import { vueToHtml, readVue } from '../utils/vueTsr'

const stashMap: TabStash = new Map()

hexo.on('generateBefore', () => {
    stashMap.clear()
})

/**
 * @description tab 标签页
 * @param {string[]} args 数组
 * - groupId 标记出当前所在的tab所属的组，必须是在当前所在页面唯一的，不重复的
 * - finish 结束标记，表示tab已经结束了
 * - @ tab name 标签名
 * @param {string} content markdown
 * @returns
 */
function tab(args: string[], content: string) {
    // @ts-ignore
    const { path: urlPath } = this
    const { arr, content: name } = noEndingArgs(args)
    const [groupId] = arr
    if (_.isEmpty(groupId)) {
        return '-'
    }
    const id = `${urlPath}-${groupId}`
    const stashs = stashMap.get(id) || []
    stashs.push({
        name: name!,
        content: hexo.render.renderSync({ text: content, engine: 'markdown' }),
    })
    if (arr.includes('finish')) {
        stashMap.delete(id)
        const tabs = stashs
        const tmpPath = path.join(hexo.theme_dir, 'templates', 'tab.vue')
        return vueToHtml(readVue(tmpPath)!, { tabs, key: id })
    } else {
        stashMap.set(id, stashs)
    }
    return ''
}

// @ts-ignore
hexo.extend.tag.register('tab', tab, { ends: true, async: true })
