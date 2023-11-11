import fs from 'fs'
import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'

export function vueToHtml(tmpStr: string, data: any): Promise<string> {
    const m = tmpStr.match(/<template>([\s\S]*?)<\/template>/)
    const app = createSSRApp({
        template: m![1],
        data: () => data,
    })
    return renderToString(app)
}

export function readVue(filePath: string) {
    if (!/.vue$/.test(filePath) || !fs.existsSync(filePath)) {
        return
    }
    return fs.readFileSync(filePath, 'utf-8')
}
