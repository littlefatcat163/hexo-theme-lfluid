import nunjucks from 'nunjucks'
import pathFn from 'path'
import fs from 'fs'

hexo.extend.generator.register('_hexo_generator_search', function (locals) {
    // @ts-ignore
    const config = this.theme.config

    const env = new nunjucks.Environment()

    env.addFilter('uriencode', function (str: string) {
        return encodeURI(str)
    })

    env.addFilter('noControlChars', function (str: string) {
        // eslint-disable-next-line no-control-regex
        return str && str.replace(/[\x00-\x1F\x7F]/g, '')
    })

    env.addFilter('urlJoin', function (str: string[]) {
        const base = str[0]
        const relative = str[1]
        return relative
            ? base.replace(/\/+$/, '') + '/' + relative.replace(/^\/+/, '')
            : base
    })

    const searchTmplSrc = pathFn.join(
        hexo.theme_dir,
        './source/xml/local-search.xml'
    )
    const searchTmpl = nunjucks.compile(
        fs.readFileSync(searchTmplSrc, 'utf8'),
        env
    )

    let searchField = 'post'
    const content = true

    let posts, pages

    if (searchField.trim() !== '') {
        searchField = searchField.trim()
        if (searchField === 'post') {
            posts = locals.posts.sort('-date')
        } else if (searchField === 'page') {
            pages = locals.pages
        } else {
            posts = locals.posts.sort('-date')
            pages = locals.pages
        }
    } else {
        posts = locals.posts.sort('-date')
    }

    const xml = searchTmpl.render({
        config: config,
        posts: posts,
        pages: pages,
        content: content,
        url: hexo.config.root,
    })

    return {
        path: '/local-search.xml',
        data: xml,
    }
})
