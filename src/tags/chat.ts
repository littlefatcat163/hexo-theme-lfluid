import path from 'path'
import _ from 'lodash'
import type { Chat, ChatRole } from '../../types/tag'
import { noEndingArgs } from '../utils/hexoTagArgs'
import { vueToHtml, readVue } from '../utils/vueTsr'

const chatStashMap: Map<string, Chat[]> = new Map()

hexo.on('generateBefore', () => {
    chatStashMap.clear()
})

function chats(args: string[]) {
    // @ts-ignore
    const { path: id } = this
    const stashs = chatStashMap.get(id) || []
    if (args.includes('finish')) {
        chatStashMap.delete(id)
        const chats = stashs
        const tmpPath = path.join(hexo.theme_dir, 'templates', 'Chat.vue')
        return vueToHtml(readVue(tmpPath)!, { chats })
    } else {
        chatStashMap.set(id, stashs)
    }
    return ''
}

async function chatpane(args: string[], content: string) {
    // @ts-ignore
    const { path: id } = this
    const { arr, content: name } = noEndingArgs(args)
    const [role] = arr
    const stashs = chatStashMap.get(id) || []
    stashs.push({
        role: role as ChatRole,
        name: name!,
        content: await hexo.render.render({ text: content, engine: 'markdown' }),
    })
    chatStashMap.set(id, stashs)
    return ''
}

// @ts-ignore
hexo.extend.tag.register('chats', chats, { ends: false, async: true })
// @ts-ignore
hexo.extend.tag.register('chatpane', chatpane, { ends: true, async: true })
