import fs from 'fs'
import path from 'path'
import type { Type } from '../../types/tag'

function runtimeProjectInfo() {
    const projectPath = path.resolve(process.cwd(), 'package.json')
    return JSON.parse(fs.readFileSync(projectPath, 'utf-8'))
}

export function uriFor(uris: string[]) {
    const { name } = runtimeProjectInfo()
    return ['', name, ...uris].join('/')
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