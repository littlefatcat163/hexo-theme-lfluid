import path from 'path'
import fs from 'fs'

hexo.extend.helper.register('write_info', function (point) {
    // @ts-ignore
    const _this = this
    if (point === 'footer') {
        const { name, version } = JSON.parse(
            fs.readFileSync(path.join(hexo.base_dir, 'package.json'), 'utf-8')
        )
        const tmpPath = path.join(hexo.theme_dir, 'templates', 'footer.ejs')
        const href = _this.url_for('about')
        return hexo.render.renderSync({ path: tmpPath }, { name, version, href })
    }
    return
})
