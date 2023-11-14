;(() => {
    const $modal = document.getElementById('modalSearch')
    const $input = document.getElementById('modalSearchInput')
    const $result = document.getElementById('modalSearchResult')
    let inputThol

    let dataSource
    function fetchData() {
        if (dataSource != null) {
            return
        }
        $result.innerHTML =
            '<div class="m-auto text-center"><div class="spinner-grow text-primary" role="status"><span class="visually-hidden">Loading...</span></div></div>'
        fetch(LNote.root + 'content.json')
            .then((rep) => rep.json())
            .then((res) => (dataSource = res))
            .finally(() => ($result.innerHTML = ''))
    }

    $modal.addEventListener('show.bs.modal', () => {
        fetchData()
        $input.focus()
    })

    $modal.addEventListener('hidden.bs.modal', () => {
        console.log('hide')
    })

    $input.addEventListener('input', (e) => {
        if (dataSource == null) {
            return
        }
        clearTimeout(inputThol)
        inputThol = setTimeout(() => {
            const kw = e.target.value.trim()
            if (kw === '') {
              return
            }
            const matchedList = dataSource.filter((item) => {
                return item.excerpt.includes(kw) || item.title.includes(kw)
            })
            if (matchedList.length > 0) {
                e.target.classList.remove('invalid')
                e.target.classList.add('valid')
                const { root } = LNote
                $result.innerHTML = matchedList
                    .map((item) => {
                        let { excerpt, title } = item
                        if (excerpt.includes(kw)) {
                            excerpt = excerpt.replace(
                                kw,
                                `<span class="text-success-emphasis">${kw}</span>`
                            )
                        } else if (title.includes(kw)) {
                            title = title.replace(
                                kw,
                                `<span class="text-success-emphasis">${kw}</span>`
                            )
                        }

                        return `<div><a href="${root}${item.path}" class="fs-5 link-warning">${title}</a><p>${excerpt}</p></div>`
                    })
                    .join('')
            } else {
                e.target.classList.remove('valid')
                e.target.classList.add('invalid')
            }
        }, 500)
    })
})()
