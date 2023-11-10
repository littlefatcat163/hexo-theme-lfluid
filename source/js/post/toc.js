(() => {
    const toc = $('#toc')
    if (toc.length === 0 || !window.tocbot) {
        return
    }
    const boardCtn = $('#board-ctn')
    const boardTop = boardCtn.offset().top

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
        headingsOffset: -boardTop,
        headingSelector: 'h1,h2,h3,h4',
        placement: 'right',
        collapseDepth: 0
    })
    if (toc.find('.toc-list-item').length > 0) {
        toc.css('visibility', 'visible')
    }
})()
