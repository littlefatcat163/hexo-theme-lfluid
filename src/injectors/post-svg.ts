import path from 'path'
import { readYml } from '../utils/ymlConf'

const createSymbol = (id: string, pathTag: string) =>
    `<symbol id="${id}" viewBox="0 0 16 16" fill="currentColor">${pathTag}</symbol>`

const targetSVG = () => {
    const dataPath = path.join(hexo.theme_dir, 'config', 'svg.yml')
    const res = readYml(dataPath)
    const svgs = []
    for (let key in res) {
        svgs.push(createSymbol(key, res[key]))
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:none;overflow:hidden;width:0;height:0">
<defs>${svgs.join('\n')}</defs></svg>`
}

hexo.extend.injector.register('body_begin', targetSVG, 'post')
