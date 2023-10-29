export const isObject = (obj: any) => {
    return obj && typeof obj === 'object' && !Array.isArray(obj)
}

export const isNotEmptyObject = (obj: any) => {
    return (
        obj &&
        typeof obj === 'object' &&
        Object.getOwnPropertyNames(obj).length !== 0
    )
}

export const isEmptyObject = (obj: any) => {
    return !isNotEmptyObject(obj)
}

export const merge = (target: any, ...sources: any) => {
    for (const source of sources) {
        for (const key in source) {
            if (!Object.prototype.hasOwnProperty.call(source, key)) {
                continue
            }
            if (isObject(target[key]) && isObject(source[key])) {
                merge(target[key], source[key])
            } else {
                target[key] = source[key]
            }
        }
    }
    return target
}
