import {
    linkIsCDN,
    linkUrl,
    linkScript,
    linkScriptESM,
    linkStyle,
} from '../htmlLink'

describe('test linkIsCDN', () => {
    test('http and https', () => {
        expect(linkIsCDN('http://')).toBeTruthy()
        expect(linkIsCDN('https://')).toBeTruthy()
    })
    test('//', () => {
        expect(linkIsCDN('//')).toBeTruthy()
    })
    test('no cdn', () => {
        expect(linkIsCDN('')).toBeFalsy()
        expect(linkIsCDN('https')).toBeFalsy()
    })
})

describe('test linkUrl', () => {
    test('cdn', () => {
        const link = 'https://google.com'
        expect(linkUrl('', link, 'js')).toEqual(link)
        expect(linkUrl('', link, 'css')).toEqual(link)
    })
    test('start with root', () => {
        const root = '/root/'
        const link = `${root}test`
        expect(linkUrl(root, link, 'js')).toEqual(link)
        expect(linkUrl(root, link, 'css')).toEqual(link)
    })
    test('js', () => {
        const root = '/root/'
        const link = 'xxx.js'
        expect(linkUrl(root, link, 'js')).toEqual(`${root}js/${link}`)
    })
    test('css', () => {
        const root = '/root/'
        const link = 'xx/xxx.css'
        expect(linkUrl(root, link, 'css')).toEqual(`${root}css/${link}`)
    })
})

describe('test link', () => {
    test('linkScript', () => {
        const link = 'xxx.js'
        expect(linkScript(link)).toEqual(`<script src="${link}"></script>`)
    })
    test('linkScriptESM', () => {
        const link = 'xxx.js'
        expect(linkScriptESM(link)).toEqual(
            `<script type="module" src="${link}"></script>`
        )
    })
    test('linkStyle', () => {
        const link = 'xxx.css'
        expect(linkStyle(link)).toEqual(
            `<link rel="stylesheet" href="${link}" />`
        )
    })
})
