import path from 'path'
import { readYml } from '../utils/ymlConf'
import { vueToHtml, readVue } from '../utils/vueTsr'
import { uriFor } from '../../templates/utils/uri'

const template = (args: string[]) => {
    const [tmpDir, tmpFile, dataFile] = args
    const DIR = 'templates'
    const tmpPath = path.join(hexo.base_dir, DIR, tmpDir, tmpFile)
    const dataPath = path.join(hexo.base_dir, DIR, tmpDir, dataFile)
    const data = readYml(dataPath)

    if (/\.vue$/.test(tmpFile)) {
        return vueToHtml(readVue(tmpPath)!, data, {
            uriFor,
        })
    }
    return hexo.render.render({ path: tmpPath }, data)
}

// {% template tmpDir ejsFile dataFile %}
hexo.extend.tag.register('template', template, { ends: false, async: true })
