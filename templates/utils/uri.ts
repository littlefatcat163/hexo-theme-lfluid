import fs from 'fs'
import path from 'path'

function runtimeProjectInfo() {
    const projectPath = path.resolve(process.cwd(), 'package.json')
    return JSON.parse(fs.readFileSync(projectPath, 'utf-8'))
}

export function uriFor(resUri: string) {
    const { name } = runtimeProjectInfo()
    return ['', name, resUri.replace(/^\//, '')].join('/')
}