import injects from './lib/injects'

hexo.on('generateBefore', () => {
    injects(hexo)
})
