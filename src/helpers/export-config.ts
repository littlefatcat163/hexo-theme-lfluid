import pkgInfo from '../../package.json'

hexo.extend.helper.register('export_config', function () {
    // @ts-ignore
    const { config } = this
    const globalLnote = { version: pkgInfo.version, root: config.root }
    return `<script id="lnote-configs">
    var LNote = window.LNote || ${JSON.stringify(globalLnote)};
  </script>`
})
