import { igRowCol } from '../hexoTagArgs'

describe('test igRowCol', () => {
    test('1 imgs', () => {
        expect(igRowCol(1)).toBe(1)
    })
    test('2 imgs', () => {
        expect(igRowCol(2)).toBe(2)
    })
    test('3 imgs', () => {
        expect(igRowCol(3)).toBe(3)
    })
    test('more than 3', () => {
        expect(igRowCol(4)).toBe(2)
        expect(igRowCol(5)).toBe(3)
        expect(igRowCol(6)).toBe(3)
        expect(igRowCol(7)).toBe(3)
        expect(igRowCol(8)).toBe(3)
        expect(igRowCol(10)).toBe(3)
    })
})