export const urlJoin = function (base: string, relative: string) {
    if (/^https*:\/\//.test(relative) || /^\/\//.test(relative)) {
        return relative
    }
    return relative
        ? base.replace(/\/+$/, '') + '/' + relative.replace(/^\/+/, '')
        : base
}
