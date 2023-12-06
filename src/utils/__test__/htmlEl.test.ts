import { imgElGlobalClass } from '../htmlEl'

describe('imgElGlobalClass', () => {
    test('class', () => {
        expect(imgElGlobalClass('<img alt="xxx" >')).toEqual(
            '<img class="img-fluid object-fit-cover" alt="xxx" >'
        )
    })
})
