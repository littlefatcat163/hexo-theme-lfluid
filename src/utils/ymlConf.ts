import fs from 'fs'
import path from 'path'
import yaml from 'yaml'
import _ from 'lodash'

/**
 * @description 读取yml配置
 * @param filePath 文件路径
 * @param merge 合并配置，如果目录下读取到多份配置，true 的时候会将这些配置全部合并成一个
 * @returns 
 */
export function readYml(filePath: string, merge = true): any {
    if (_.isEmpty(filePath) || !fs.existsSync(filePath)) {
        return
    }
    const stat = fs.statSync(filePath)
    if (stat.isFile()) {
        return yaml.parse(fs.readFileSync(filePath, 'utf-8'))
    }
    if (!stat.isDirectory()) {
        return
    }
    const dirs = fs.readdirSync(filePath, { withFileTypes: true })
    if (!merge) {
        return dirs.map((dir) => {
            const res = yaml.parse(
                fs.readFileSync(path.join(filePath, dir.name), 'utf-8')
            )
            return res
        })
    }
    const data = {}
    dirs.forEach((dir) => {
        if (!dir.isFile() || !/.yml$/.test(dir.name)) {
            return
        }
        const res = yaml.parse(
            fs.readFileSync(path.join(filePath, dir.name), 'utf-8')
        )
        Object.assign(data, res)
    })
    return data
}
