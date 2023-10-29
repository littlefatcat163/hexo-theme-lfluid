import { urlJoin } from '../utils/url-join'

hexo.extend.helper.register('css_ex', function (base, relative, ex = '') {
    // @ts-ignore
    return `<link ${ex} rel="stylesheet" href="${this.url_for(
        urlJoin(base, relative)
    )}" />`
})

hexo.extend.helper.register('js_ex', function (base, relative, ex = '') {
    // @ts-ignore
    return `<script ${ex} src="${this.url_for(
        urlJoin(base, relative)
    )}"></script>`
})

hexo.extend.helper.register('url_join', function (base, relative) {
    // @ts-ignore
    return this.url_for(urlJoin(base, relative))
})
