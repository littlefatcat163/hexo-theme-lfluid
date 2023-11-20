import path from 'path'
import { readYml } from '../utils/ymlConf'
import {
    linkScriptESM,
    linkUrl,
    linkStyle,
    linkIsCDN,
    linkScript,
} from '../utils/htmlLink'
import { findJsFullName, tsrDirPath } from '../utils/assetsFile'

const base_dir = hexo.base_dir
const root = hexo.config.root

hexo.extend.helper.register('post_csr', function (page) {
    const [cate, filename] = (page.slug as string).split('/')
    const sources = []
    const dirPath = path.join(base_dir, 'source', 'js', cate)
    const postEnrtyJsFile = findJsFullName(dirPath, filename)
    if (postEnrtyJsFile != null) {
        sources.push(
            linkScriptESM(linkUrl(root, `${cate}/${postEnrtyJsFile}`, 'js'))
        )
    }
    const ymlFilePath = path.join(base_dir, 'src', cate, `${filename}.yml`)
    const config = readYml(ymlFilePath)
    if (config != null) {
        const { css, js } = config
        if (Array.isArray(js)) {
            sources.unshift(
                js
                    .map((item) => {
                        if (linkIsCDN(item)) {
                            return linkScript(linkUrl(root, item, 'js'))
                        }
                        const res = tsrDirPath(item)
                        const resDirPath = path.join(
                            base_dir,
                            'source',
                            'js',
                            ...res.dirs
                        )
                        const entryJsFile = findJsFullName(
                            resDirPath,
                            res.filename!
                        )
                        if (entryJsFile == null) {
                            return ''
                        }
                        return linkScriptESM(
                            linkUrl(
                                root,
                                [...res.dirs, entryJsFile].join('/'),
                                'js'
                            )
                        )
                    })
                    .join('')
            )
        }
        if (Array.isArray(css)) {
            sources.unshift(
                css
                    .map((item) => linkStyle(linkUrl(root, item, 'css')))
                    .join('')
            )
        }
    }
    return sources.join('')
})
