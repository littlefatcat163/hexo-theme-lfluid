import { readYml } from '../ymlConf'
import path from 'path'

describe('test readYml', () => {
    test('non exists file', () => {
        expect(readYml('xxx')).toBeUndefined()
    })
    test('one yml', () => {
        const filePath = path.join(__dirname, 'one.yml')
        expect(readYml(filePath)).toEqual({ test: 'xxx' })
    })
    test('data dir merged', () => {
        const filePath = path.join(__dirname, 'data')
        const res = {
            a: { name: 'a', value: 'a' },
            b: { name: 'b', value: 'b' },
        }
        expect(readYml(filePath)).toEqual(res)
        expect(readYml(filePath, true)).toEqual(res)
    })

    test('data dir not merge', () => {
        const filePath = path.join(__dirname, 'data')
        const res = [
            { a: { name: 'a', value: 'a' } },
            { b: { name: 'b', value: 'b' } },
        ]
        expect(readYml(filePath, false)).toEqual(res)
    })

    test('error', () => {
        const filePath = path.join(__dirname, '')
        const res = [
            { a: { name: 'a', value: 'a' } },
            { b: { name: 'b', value: 'b' } },
        ]
        expect(readYml(filePath, true)).not.toEqual(res)
    })
})
