function gettingArr(parArray: any) {
    if (parArray && typeof parArray.toArray === 'function') {
        return parArray.toArray()
    }
    return undefined
}

hexo.extend.helper.register('my_post_main', (point, post) => {
    const categories = gettingArr(post.categories)
    const tags = gettingArr(post.tags)

    const res = hexo.execFilterSync(point, { categories, tags }, null)
    if (typeof res === 'string') {
        return res
    }
    return ''
})

hexo.extend.helper.register('my_post_js', (post) => {
    const categories = gettingArr(post.categories)
    const tags = gettingArr(post.tags)

    const { source } = post

    const res = hexo.execFilterSync(
        'postJS',
        { categories, tags, source },
        null
    )
    if (typeof res === 'string') {
        return res
    }
    return ''
})

hexo.extend.helper.register('my_post_css', (post) => {
    const categories = gettingArr(post.categories)
    const tags = gettingArr(post.tags)

    const { source } = post

    const res = hexo.execFilterSync(
        'postCSS',
        { categories, tags, source },
        null
    )
    if (typeof res === 'string') {
        return res
    }
    return ''
})
