;(() => {
    if (!'ClipboardJS' in window) {
        return
    }

    function genSVG(id) {
        return `<svg width="1em" height="1em"><use xlink:href="#${id}"/></svg>`
    }

    const codes = document.querySelectorAll('.markdown-body .highlight')
    codes.forEach((item) => {
        const btn = document.createElement('button')
        btn.type = 'button'
        btn.classList.add('btn-clipboard')
        btn.title = 'Copy to clipboard'
        btn.innerHTML = genSVG('clipboard')
        item.insertAdjacentElement('afterbegin', btn)
    })

    const clipboard = new ClipboardJS('.btn-clipboard', {
        target: function (trigger) {
            return trigger.parentNode.getElementsByTagName('code')[0]
        },
    })
    clipboard.on('success', function (e) {
        e.clearSelection()
        e.trigger.innerHTML = genSVG('check')
        e.trigger.title = 'Copied!'
        setTimeout(function () {
            e.trigger.innerHTML = genSVG('clipboard')
            e.trigger.title = 'Copy to clipboard'
        }, 2000)
    })
})()
