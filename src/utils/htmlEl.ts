export function imgElGlobalClass(imgStr: string, classnames: string[] = []) {
    return imgStr.replace(
        '<img',
        `<img class="${['img-fluid', 'object-fit-cover', ...classnames].join(
            ' '
        )}"`
    )
}
