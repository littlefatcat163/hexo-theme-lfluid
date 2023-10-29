hexo.extend.helper.register('inject_point', function (point) {
    // @ts-ignore
    const _this = this
    return _this.theme.injects[point]
        .map((item: any) =>
            _this.partial(item.layout, item.locals, item.options)
        )
        .join('')
})
