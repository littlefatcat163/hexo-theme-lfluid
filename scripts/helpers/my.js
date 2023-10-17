function gettingArr(parArray) {
    if (parArray && typeof parArray.toArray === 'function') {
        return parArray.toArray();
    }
    return undefined;
}

hexo.extend.helper.register('my_post_main', function(point, post) {
    const categories = gettingArr(post.categories);
    const tags = gettingArr(post.tags);
  
    const res = hexo.execFilterSync(point, { categories, tags });
    if (typeof res === 'string') {
        return res;
    }
    return null;
});
  
hexo.extend.helper.register('my_post_js', function(post) {
    const categories = gettingArr(post.categories);
    const tags = gettingArr(post.tags);

    const { source } = post;

    const res = hexo.execFilterSync('postJS', { categories, tags, source });
    if (typeof res === 'string') {
        return res;
    }
    return null;
});

hexo.extend.helper.register('my_post_css', function(post) {
    const categories = gettingArr(post.categories);
    const tags = gettingArr(post.tags);

    const { source } = post;

    const res = hexo.execFilterSync('postCSS', { categories, tags, source });
    if (typeof res === 'string') {
        return res;
    }
    return null;
});