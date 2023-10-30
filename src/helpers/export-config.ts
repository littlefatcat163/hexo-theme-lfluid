// import path from 'path'
// import fs from 'fs'
import pkgInfo from '../../package.json'
import { urlJoin } from '../utils/url-join'

/* let baseDirVersion: string

function getBaseDirVersion() {
    if (baseDirVersion == null) {
        const configPath = path.join(hexo.base_dir, 'package.json')
        if (fs.existsSync(configPath)) {
            const res = fs.readFileSync(configPath, 'utf-8')
            baseDirVersion = JSON.parse(res).version
        }
    }
    return baseDirVersion
} */

hexo.extend.helper.register('export_config', function () {
    // @ts-ignore
    const { config } = this
    // const baseDirVersion = getBaseDirVersion()
    // @ts-ignore
    const theme = this.theme as any
    const exportConfig = {
        hostname:
            new URL(config.url).searchParams.get('hostname') || config.url,
        root: config.root,
        version: pkgInfo.version,
        typing: theme.fun_features.typing,
        anchorjs: theme.fun_features.anchorjs,
        progressbar: theme.fun_features.progressbar,
        code_language: theme.code.language,
        copy_btn: theme.code.copy_btn,
        image_caption: theme.post.image_caption,
        image_zoom: theme.post.image_zoom,
        toc: theme.post.toc,
        lazyload: theme.lazyload,
        web_analytics: theme.web_analytics,
        search_path: urlJoin(config.root, theme.search.path),
        include_content_in_search: theme.search.content,
    }
    const globalLnote = { version: pkgInfo.version }
    return `<script id="lnote-configs">
    var LNote = window.LNote || ${JSON.stringify(globalLnote)};
    var CONFIG = ${JSON.stringify(exportConfig)};
  </script>`
})
