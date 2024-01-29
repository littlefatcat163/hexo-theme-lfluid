import path from 'path'
import _ from 'lodash'
import type { Tab } from '../../types/tag'
import { noEndingArgs } from '../utils/hexoTagArgs'
import { vueToHtml, readVue } from '../utils/vueTsr'

const tabStashMap: Map<string, Tab[]> = new Map()
const tabGidStashMap: Map<string, number> = new Map()

hexo.on('generateBefore', () => {
    tabStashMap.clear()
    tabGidStashMap.clear()
})

function tabs(args: string[]) {
    // @ts-ignore
    const { path: id } = this
    const stashs = tabStashMap.get(id) || []
    if (args.includes('finish')) {
        tabStashMap.delete(id)
        const groupId = tabGidStashMap.get(id) || 1
        const tabs = stashs
        const tmpPath = path.join(hexo.theme_dir, 'templates', 'Tab.vue')
        tabGidStashMap.set(id, groupId + 1)
        return vueToHtml(readVue(tmpPath)!, { tabs, key: groupId })
    } else {
        tabStashMap.set(id, stashs)
    }
    return ''
}

async function tabPane(args: string[], content: string) {
    // @ts-ignore
    const { path: id } = this
    const { content: name } = noEndingArgs(args)
    const stashs = tabStashMap.get(id) || []
    stashs.push({
        name: name!,
        content: await hexo.render.render({ text: content, engine: 'markdown' }),
    })
    tabStashMap.set(id, stashs)
    return ''
}

// @ts-ignore
hexo.extend.tag.register('tabs', tabs, { ends: false, async: true })
// @ts-ignore
hexo.extend.tag.register('tabpane', tabPane, { ends: true, async: true })
