hexo.extend.filter.register('before_generate', function() {
  // @ts-ignore
  const _this = this
  _this._bindLocals();

  const allPages = _this.locals.get('pages') as any;
  allPages.data.map((page: any) => {
    if (page.comment !== true) {
      page.comments = typeof page.comment === 'string' && page.comment !== '';
    } else {
      page.comments = true;
    }
    return page;
  });
  _this.locals.set('pages', allPages);

  const allPosts = _this.locals.get('posts') as any;
  allPosts.data.map((post: any) => {
    if (post.comment === false) {
      post.comments = false;
    }
    return post;
  });
  const hidePosts = allPosts.filter((post: any) => post.hide);
  const normalPosts = allPosts.filter((post: any) => !post.hide);
  const indexPost = allPosts.filter((post: any) => !post.hide && !post.archive)

  _this.locals.set('all_posts', allPosts);
  _this.locals.set('hide_posts', hidePosts);
  _this.locals.set('posts', normalPosts);
  _this.locals.set('index_posts', indexPost);
});

// const original_post_generator = hexo.extend.generator.get('post');

/* hexo.extend.generator.register('post', function(locals) {
  // 发送时需要把过滤的页面也加入
  return original_post_generator.bind(this)({
    posts: new locals.posts.constructor(
      locals.posts.data.concat(locals.hide_posts.data)
    )
  });
}); */

// 渲染文章后的过滤
/* hexo.extend.filter.register('after_post_render', (page) => {
  // 移除 hexo-renderer-pandoc 生成的 <colgroup>
  page.content = page.content.replace(/<colgroup>.+?<\/colgroup>/gims, '');
  return page;
}); */
