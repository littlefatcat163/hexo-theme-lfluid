import fs from 'fs'
import path from 'path'

// generate 404 page
if (!fs.existsSync(path.join(hexo.source_dir, '404.html'))) {
    hexo.extend.generator.register('_404', function (locals: any) {
        return {
            path: '404.html',
            data: locals.theme,
            layout: '404',
        }
    })
}

// generate tags Page
hexo.extend.generator.register('_tags', function (locals: any) {
    return {
        path: 'tags/index.html',
        data: locals.theme,
        layout: 'tags',
    }
})

// generate categories Page
hexo.extend.generator.register('_categories', function (locals: any) {
    return {
        path: 'categories/index.html',
        data: locals.theme,
        layout: 'categories',
    }
})

// generate links page
hexo.extend.generator.register('_links', function (locals: any) {
    return {
        path: 'links/index.html',
        data: locals.theme,
        layout: 'links',
    }
})
