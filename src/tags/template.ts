import fs from 'fs'
import path from 'path'
import yaml from 'yaml'

const template = (args: string[]) => {
    const [ tmpDir, ejsFile, dataFile ] = args
    const DIR = 'templates'
    const tmpPath = path.join(hexo.base_dir, DIR, tmpDir, ejsFile)
    const dataPath = path.join(hexo.base_dir, DIR, tmpDir, dataFile)
    const data = yaml.parse(fs.readFileSync(dataPath, 'utf-8'))
    return hexo.render.renderSync({path: tmpPath}, data)
}

// {% template tmpDir ejsFile dataFile %}
hexo.extend.tag.register('template', template, { ends: false })
