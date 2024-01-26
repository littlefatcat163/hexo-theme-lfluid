import path from 'path'
import _ from 'lodash'
import type { TabStash } from '../../types/tag'
import { noEndingArgs } from '../utils/hexoTagArgs'
import { vueToHtml, readVue } from '../utils/vueTsr'

const stashMap: TabStash = new Map()
const tabGidStashMap: Map<string, number> = new Map()

hexo.on('generateBefore', () => {
    stashMap.clear()
    tabGidStashMap.clear()
})

function tabs(args: string[]) {
    // @ts-ignore
    const { path: id } = this
    const stashs = stashMap.get(id) || []
    if (args.includes('finish')) {
        stashMap.delete(id)
        const groupId = tabGidStashMap.get(id) || 1
        const tabs = stashs
        const tmpPath = path.join(hexo.theme_dir, 'templates', 'Tab.vue')
        tabGidStashMap.set(id, groupId + 1)
        return vueToHtml(readVue(tmpPath)!, { tabs, key: groupId })
    } else {
        stashMap.set(id, stashs)
    }
    return ''
}

function tabPane(args: string[], content: string) {
    // @ts-ignore
    const { path: id } = this
    const { content: name } = noEndingArgs(args)
    const stashs = stashMap.get(id) || []
    stashs.push({
        name: name!,
        content: hexo.render.renderSync({ text: content, engine: 'markdown' }),
    })
    stashMap.set(id, stashs)
    return ''
}

// @ts-ignore
hexo.extend.tag.register('tabs', tabs, { ends: false, async: true })
// @ts-ignore
hexo.extend.tag.register('tabpane', tabPane, { ends: true, async: true })
