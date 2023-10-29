hexo.extend.helper.register('import_js', function (base, relative, ex = '') {
    // @ts-ignore
    const _this = this
    if (!Array.isArray(_this.page.script_snippets)) {
        _this.page.script_snippets = []
    }
    _this.page.script_snippets.push(_this.js_ex(base, relative, ex))
})

hexo.extend.helper.register('import_script', function (snippet) {
    // @ts-ignore
    const _this = this
    if (!Array.isArray(_this.page.script_snippets)) {
        _this.page.script_snippets = []
    }
    _this.page.script_snippets.push(snippet)
})

hexo.extend.helper.register('import_css', function (base, relative, ex = '') {
    // @ts-ignore
    const _this = this
    if (!Array.isArray(_this.page.css_snippets)) {
        _this.page.css_snippets = []
    }
    _this.page.css_snippets.push(_this.css_ex(base, relative, ex))
})
