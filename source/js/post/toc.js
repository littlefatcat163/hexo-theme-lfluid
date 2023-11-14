(() => {
    if (!window.tocbot) {
        return
    }

    window.tocbot.init({
        tocSelector: '#toc-body',
        contentSelector: '.markdown-body',
        linkClass: 'tocbot-link',
        activeLinkClass: 'tocbot-active-link',
        listClass: 'tocbot-list',
        isCollapsedClass: 'tocbot-is-collapsed',
        collapsibleClass: 'tocbot-is-collapsible',
        scrollSmooth: true,
        includeTitleTags: true,
        // headingsOffset: -boardTop,
        headingSelector: 'h1,h2,h3,h4',
        placement: 'right',
        collapseDepth: 0
    })

    const toc = document.getElementById('toc')
    toc.style.visibility = 'visible'
})()
