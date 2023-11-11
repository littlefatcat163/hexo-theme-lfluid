import { vueToHtml, readVue } from '../vueTsr'
import path from 'path'

describe('test vue string to html', () => {
    test('vueToHtml', () => {
        const str = `
            <template>
                <h1>{{ test }}</h1>
            </template>
        `
        const res = vueToHtml(str, { test: 'xxx' })
        expect(res).resolves.toBe('<h1>xxx</h1>')
    })
})

describe('test read vue', () => {
    test('not vue file', () => {
        expect(readVue('xxx')).toBeUndefined()
    })
    test('no exist file', () => {
        expect(readVue('xxx.vue')).toBeUndefined()
    })
    test('exist vue', () => {
        const filePath = path.join(__dirname, 'test.vue')
        expect(readVue(filePath)).toMatch('<div>?</div>')
    })
})
