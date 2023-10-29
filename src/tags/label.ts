import { noEndingArgs } from '../utils/hexoTagArgs'

const label = (args: string[]) => {
    const { arr, content } = noEndingArgs(args)

    return `<span class="badge text-bg-${arr[0]}">${content}</span>`
}

// {% label class @text %}
hexo.extend.tag.register('label', label, { ends: false })
