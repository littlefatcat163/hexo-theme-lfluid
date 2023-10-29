import mergeConf from './lib/merge-configs'
import compatibleConf from './lib/compatible-configs'
import injects from './lib/injects'
import highlight from './lib/highlight'
import lazyload from './lib/lazyload'
import footnote from './lib/footnote'

hexo.on('generateBefore', () => {
    mergeConf(hexo)
    compatibleConf(hexo)
    injects(hexo)
    highlight(hexo)
    lazyload(hexo)
    footnote(hexo)
})
