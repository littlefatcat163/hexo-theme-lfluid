import path from 'path'
import _ from 'lodash'
import type { Tab } from '../../types/tag'
import { noEndingArgs } from '../utils/hexoTagArgs'
import { vueToHtml, readVue } from '../utils/vueTsr'

let key: string = ''

let stashs: Tab[] = []

function tab(args: string[], content: string) {
    const { arr, content: name } = noEndingArgs(args)
    if (arr.includes('start')) {
        const keyParam = arr.find(item => /^key=/.test(item))
        if (!_.isEmpty(keyParam)) {
            key = keyParam!.split('=')[1]
        }
    }
    if (_.isEmpty(key)) {
        return
    }
    stashs.push({
        name: name!,
        content: hexo.render.renderSync({ text: content }),
    })
    if (arr.includes('end')) {
        const tabs = stashs
        stashs = []
        const tmpPath = path.join(hexo.theme_dir, 'templates', 'tab.vue')
        return vueToHtml(readVue(tmpPath)!, { tabs, key })
    }
    return
}

// @ts-ignore
hexo.extend.tag.register('tab', tab, { ends: true, async: true })
