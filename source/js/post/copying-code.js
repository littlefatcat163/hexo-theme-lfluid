;(() => {
    if (!'ClipboardJS' in window) {
        return
    }

    function genSVG(id) {
        return `<svg width="1em" height="1em"><use xlink:href="#${id}"/></svg>`
    }

    $('.markdown-body .highlight').each(function () {
        $(this).prepend(
            `<button type="button" class="btn-clipboard" title="Copy to clipboard">${genSVG(
                'clipboard'
            )}</button>`
        )
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
