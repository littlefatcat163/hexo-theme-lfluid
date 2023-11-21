// @ts-ignore
import pagination from 'hexo-pagination'

hexo.extend.generator.register('index', function (locals: any) {
    const config = hexo.config
    const posts = locals.index_posts.sort(
        config.index_generator.order_by
    ) as any

    posts.data.sort((a: any, b: any) => (b.sticky || 0) - (a.sticky || 0))

    const paginationDir = config.pagination_dir || 'page'
    const path = config.index_generator.path || ''

    return pagination(path, posts, {
        perPage: config.index_generator.per_page,
        layout: 'index',
        format: paginationDir + '/%d/',
        data: {
            __index: true,
        },
    })
})
