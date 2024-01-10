import { noEndingArgs } from '../utils/hexoTagArgs'

const hasKeyword = (arr: string[], kw: string) => {
    return arr.some((item) => item === kw)
}

const bgClasses = (arr: string[], type: string) => {
    if (hasKeyword(arr, 'bg')) {
        return ['px-1', `text-bg-${type}`]
    }
    return []
}

const emphasisClasses = (arr: string[], type: string) => {
    if (hasKeyword(arr, 'bg')) {
        return []
    }
    if (hasKeyword(arr, 'emphasis')) {
        return [`text-${type}-emphasis`]
    }
    return []
}

const typeClasses = (arr: string[], type: string) => {
    if (hasKeyword(arr, 'bg') || hasKeyword(arr, 'emphasis')) {
        return []
    }
    const cls = [`text-${type}`]
    if (['warning', 'info', 'light'].includes(type)) {
        cls.push('bg-dark')
    }
    if (['dark'].includes(type)) {
        cls.push('bg-white')
    }
    return cls
}

const font = (args: string[]) => {
    const { arr, content } = noEndingArgs(args)
    const classes = []
    const [type] = arr

    // 1. 出现 bg 表示当前颜色作用到背景上
    classes.push(...bgClasses(arr, type))
    classes.push(...emphasisClasses(arr, type))
    classes.push(...typeClasses(arr, type))

    // 2. 出现 b 表示粗体
    if (hasKeyword(arr, 'b')) {
        classes.push('fw-bold')
    }

    // 3. 出现数字，表示字体大小，范围 1 ~ 6，类似 h1 ~ h6的字体大小
    const size = arr.find((item) => /^[1,2,3,4,5,6]$/.test(item))
    if (size != null) {
        classes.push(`fs-${size}`)
    }

    return `<font class="${classes.join(' ')}">${content}</font>`
}

// {% font warning b @text %}
hexo.extend.tag.register('font', font, { ends: false })
