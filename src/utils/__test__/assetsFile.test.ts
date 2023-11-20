import path from 'path'
import { findJsFullName, tsrDirPath } from '../assetsFile'

describe('test findJsFullName', () => {
    test('not exists dir', () => {
        expect(findJsFullName('xxx', 'xxx')).toBeUndefined()
    })
    test('there is test.js', () => {
        const dirPath = path.join(__dirname, 'assets')
        expect(findJsFullName(dirPath, 'test')).toBe('test.js')
        expect(findJsFullName(dirPath, 'test.js')).toBe('test.js')
    })
    test('there is xxx.fsad.js', () => {
        const dirPath = path.join(__dirname, 'assets')
        expect(findJsFullName(dirPath, 'xxx')).toBe('xxx.fsad.js')
        expect(findJsFullName(dirPath, 'xxx.js')).toBe('xxx.fsad.js')
    })
})

describe('test tsrDirPath', () => {
    test('xxx.js', () => {
        const { dirs, filename } = tsrDirPath('xxx.js')
        expect(filename).toEqual('xxx.js')
        expect(dirs).toEqual([])
    })
    test('ccc/xxx.js', () => {
        const { dirs, filename } = tsrDirPath('ccc/xxx.js')
        expect(filename).toEqual('xxx.js')
        expect(dirs).toEqual(['ccc'])
    })
    test('aaa/ccc/xxx.js', () => {
        const { dirs, filename } = tsrDirPath('aaa/ccc/xxx.js')
        expect(filename).toEqual('xxx.js')
        expect(dirs).toEqual(['aaa', 'ccc'])
    })
})
