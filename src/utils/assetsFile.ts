import fs from 'fs'

/**
 * @description 查找路径下的js完整名称，如果js名称存在hash，返回完整的js文件名
 * @param {string} dirpath 目录
 * @param {string} filename 文件名
 * @returns fullname 完整文件名
 */
export function findJsFullName(dirpath: string, filename: string) {
    const slugName = filename.replace(/.js$/, '')
    if (!fs.existsSync(dirpath)) {
        return
    }
    const dir = fs.readdirSync(dirpath)
    return dir.find((item) => /.js$/.test(item) && item.startsWith(slugName))
}

export function tsrDirPath(assetsPath: string) {
    const list = assetsPath.split('/')
    const filename = list.pop()
    return {
        dirs: list,
        filename,
    }
}
