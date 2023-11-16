let theme = document.documentElement.getAttribute('data-bs-theme')
if (theme !== 'dark') {
    theme = 'forest'
}
mermaid.initialize({
    theme,
    startOnLoad: true
})
mermaid.init()
