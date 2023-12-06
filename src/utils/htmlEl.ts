export function imgElGlobalClass(imgStr: string) {
    return imgStr.replace('<img', '<img class="img-fluid object-fit-cover"')
}