import path from 'path'
import fs from 'fs'
import { genSvg } from '../utils/vueTsr'

hexo.extend.helper.register('write_info', function (point) {
    if (point === 'footer') {
        const { name, version } = JSON.parse(
            fs.readFileSync(path.join(hexo.base_dir, 'package.json'), 'utf-8')
        )
        const tmpPath = path.join(hexo.theme_dir, 'templates', 'footer.ejs')
        const icon = genSvg('chat-left-dots')
        return hexo.render.renderSync({ path: tmpPath }, { name, version, icon })
    }
    return
})
