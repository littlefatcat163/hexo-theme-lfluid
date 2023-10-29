import { urlJoin } from '../../utils/url-join'

export default (hexo: any) => {
    const config = hexo.theme.config
    const loadingImage = urlJoin(
        hexo.config.root,
        config.lazyload.loading_img ||
            urlJoin(config.static_prefix.internal_img, 'loading.gif')
    )
    if (!config.lazyload || !config.lazyload.enable || !loadingImage) {
        return
    }
    if (config.lazyload.onlypost) {
        hexo.extend.filter.register('after_post_render', (page: any) => {
            if (page.layout !== 'post' && !page.lazyload) {
                return
            }
            if (page.lazyload !== false) {
                page.content = lazyImages(page.content, loadingImage)
                page.content = lazyComments(page.content)
            }
            return page
        })
    } else {
        hexo.extend.filter.register(
            'after_render:html',
            (html: string, data: any) => {
                if (!data.page || data.page.lazyload !== false) {
                    html = lazyImages(html, loadingImage)
                    html = lazyComments(html)
                    return html
                }
            }
        )
    }
}

const lazyImages = (htmlContent: string, loadingImage: string) => {
    return htmlContent.replace(
        /<img[^>]+?src=(".*?")[^>]*?>/gims,
        (str, p1) => {
            if (/lazyload/i.test(str)) {
                return str
            }
            return str.replace(p1, `${p1} srcset="${loadingImage}" lazyload`)
        }
    )
}

const lazyComments = (htmlContent: string) => {
    return htmlContent.replace(/<[^>]+?id="comments"[^>]*?>/gims, (str) => {
        if (/lazyload/i.test(str)) {
            return str
        }
        return str.replace('id="comments"', 'id="comments" lazyload')
    })
}
