import fs from 'fs'
import path from 'path'
import type { Type } from '../../types/tag'

function runtimeProjectInfo() {
    const projectPath = path.resolve(process.cwd(), 'package.json')
    return JSON.parse(fs.readFileSync(projectPath, 'utf-8'))
}

function linkIsCDN(url: string) {
    if (/^https*:\/\//.test(url) || /^\/\//.test(url)) {
        return true
    }
    return false
}

/**
 * @description 图片链接生成
 *  1. http或https开头的cdn链接，将原样转换回去，且只会返回第一个
 *  2. 多个链接组合成一个，并在前面添加上当前项目的name
 * @param {string[]} uris uri组，每一个uri必须带 / 开头，保持和 hexo 图片标签一样
 * @returns 
 */
export function uriFor(uris: string[]) {
    if (uris.length === 1 && linkIsCDN(uris[0])) {
        return uris[0]
    }
    const { name } = runtimeProjectInfo()
    return ['/', name, ...uris].join('')
}

export function typeBgClass(type: Type) {
    if (['warning', 'info', 'light'].includes(type)) {
        return 'bg-dark'
    }
    if (['dark'].includes(type)) {
        return 'bg-light'
    }
    return ''
}