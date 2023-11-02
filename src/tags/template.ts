import fs from 'fs'
import path from 'path'
import yaml from 'yaml'
import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'

const template = (args: string[]) => {
    const [ tmpDir, tmpFile, dataFile ] = args
    const DIR = 'templates'
    const tmpPath = path.join(hexo.base_dir, DIR, tmpDir, tmpFile)
    const dataPath = path.join(hexo.base_dir, DIR, tmpDir, dataFile)
    const data = yaml.parse(fs.readFileSync(dataPath, 'utf-8'))

    if (/\.vue$/.test(tmpFile)) {
        const tmp = fs.readFileSync(tmpPath, 'utf-8')
        const m = tmp.match(/<template>([\s\S]*?)<\/template>/)
        const app = createSSRApp({
            template: m![1],
            data: () => data
        })
        return renderToString(app)
    }
    return hexo.render.render({path: tmpPath}, data)
}

// {% template tmpDir ejsFile dataFile %}
hexo.extend.tag.register('template', template, { ends: false, async: true })
