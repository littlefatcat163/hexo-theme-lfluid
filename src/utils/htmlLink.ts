type HtmlLinkType = 'js' | 'css'

export function linkIsCDN(url: string) {
    if (/^https*:\/\//.test(url) || /^\/\//.test(url)) {
        return true
    }
    return false
}

export function linkUrl(root: string, url: string, type: HtmlLinkType) {
    if (linkIsCDN(url)) {
        return url
    }
    if (url.startsWith(root)) {
        return url
    }
    return `${root}${type}/${url}`
}

export function linkStyle(url: string) {
    return `<link rel="stylesheet" href="${url}" />`
}

export function linkScript(url: string) {
    return `<script src="${url}"></script>`
}

export function linkScriptESM(url: string) {
    return `<script type="module" src="${url}"></script>`
}
