hexo.extend.console.register('lfluid-start', 'start', function(args) {
    if (true) {
        hexo.config.__AUTH_LNOTE = true
        hexo.call('server', args)
    } else {
        process.exit()
    }
});

hexo.extend.console.register('lfluid-build', 'build to html', function(args) {
    if (true) {
        hexo.config.__AUTH_LNOTE = true
        hexo.call('generate', args)
    } else {
        process.exit()
    }
});