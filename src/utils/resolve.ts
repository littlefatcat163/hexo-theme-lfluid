import path from 'path'
// import { createRequire } from 'module'
// const require = createRequire(import.meta.url)

export const resolveModule = (name: string, file = '') => {
    /* const dir = `node_modules/${name}/${file}`
    if (fs.existsSync(dir)) {
        return dir
    }
    throw `${dir} not found!` */
    let dir
    try {
        // const require = createRequire(import.meta.url)
        dir = path.dirname(
            path.resolve(process.cwd(), 'node_modules', `${name}/package.json`)
        )
    } catch (error) {
        return ''
    }
    return `${dir}/${file}`
}
