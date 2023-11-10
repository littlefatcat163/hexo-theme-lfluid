import yaml from 'yaml'
import fs from 'fs'
import path from 'path'

const theme_dir = hexo.theme_dir
const root = hexo.config.root

let links: any = undefined
function readLinks() {
    if (links !== undefined) {
        return links
    }
    links = yaml.parse(
        fs.readFileSync(path.join(theme_dir, 'config', 'links.yml'), 'utf-8')
    )
    return links
}

type HtmlLinkType = 'js' | 'css'

function linkUrl(url: string, type: HtmlLinkType) {
    if (/^https*:\/\//.test(url) || /^\/\//.test(url)) {
        return url
    }
    if (url.startsWith(root)) {
        return url
    }
    return `${root}${type}/${url}`
}

function linkStyle(url: string) {
    return `<link rel="stylesheet" href="${url}" />`
}

function linkScript(url: string) {
    return `<script src="${url}"></script>`
}

const htmlLink = (items: any[], type: HtmlLinkType) => {
    if (type === 'css') {
        return items
            .map((item) => {
                return linkStyle(linkUrl(item, type))
            })
            .join('')
    }
    return items
        .map((item) => {
            return linkScript(linkUrl(item, type))
        })
        .join('')
}

// 所有html都用到的资源
const allHtmlLink = (type: HtmlLinkType) => {
    return htmlLink(readLinks()[type], type)
}

// 只有页面用到的资源
const postHtmlLink = (key: string) => {
    const source = readLinks()[key]
    if (!source) {
        return
    }
    const res = []
    if (source.css) {
        res.push(htmlLink(source.css, 'css'))
    }
    if (source.js) {
        res.push(htmlLink(source.js, 'js'))
    }
    return res.join('')
}

hexo.extend.helper.register('all_html_link', allHtmlLink)
hexo.extend.helper.register('post_html_link', postHtmlLink)
