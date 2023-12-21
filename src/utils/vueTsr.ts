import fs from 'fs'
import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { uriFor } from '../../templates/utils/uri'

export function vueToHtml(tmpStr: string, data: any): Promise<string> {
    const m = tmpStr.match(/<template>([\s\S]*?)<\/template>/)
    const app = createSSRApp({
        template: m![1],
        data: () => data,
        methods: {
            uriFor,
        },
    })
    return renderToString(app)
}

export function readVue(filePath: string) {
    if (!/.vue$/.test(filePath) || !fs.existsSync(filePath)) {
        return
    }
    return fs.readFileSync(filePath, 'utf-8')
}

export function genSvg(id: string, size = 18) {
    return `<svg width="${size}" height="${size}"><use xlink:href="#${id}"></use></svg>`
}
