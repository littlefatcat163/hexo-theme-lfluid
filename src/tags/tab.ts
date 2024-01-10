import path from 'path'
import _ from 'lodash'
import type { TabStash } from '../../types/tag'
import { noEndingArgs } from '../utils/hexoTagArgs'
import { vueToHtml, readVue } from '../utils/vueTsr'

const stashMap: TabStash = new Map()

function tab(args: string[], content: string) {
    const { arr, content: name } = noEndingArgs(args)
    const [ id ] = arr
    if (_.isEmpty(id)) {
        return
    }
    const stashs = stashMap.get(id) || []
    stashs.push({
        name: name!,
        content: hexo.render.renderSync({ text: content }),
    })
    if (arr.includes('finish')) {
        stashMap.delete(id)
        const tabs = stashs
        const tmpPath = path.join(hexo.theme_dir, 'templates', 'tab.vue')
        return vueToHtml(readVue(tmpPath)!, { tabs, key: id })
    } else {
        stashMap.set(id, stashs)
    }
    return
}

// @ts-ignore
hexo.extend.tag.register('tab', tab, { ends: true, async: true })
