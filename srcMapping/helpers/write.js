const fs = require('fs')
const path = require('path')

hexo.extend.helper.register('write_info', function (point) {
    const { name, version } = JSON.parse(
        fs.readFileSync(path.join(hexo.base_dir, 'package.json'), 'utf-8')
    )
    if (point === 'footer') {
        return `<div class="footer-inner"><div class="footer-content"><a href="/" rel="nofollow noopener"><span>${name}</span> <i class="iconfont icon-love"></i> ${version}</a></div></div>`
    }
    return
})
