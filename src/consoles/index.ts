// @ts-ignore
import { validateLicenses, hexoConsoleEnc } from 'create-lnote/src/generate'

const { start, build } = hexoConsoleEnc()

// process.argv 可以看到参数
hexo.extend.console.register(start.cmdName, async function (args) {
    try {
        await validateLicenses(hexo.config.lnote_licenses, true)
        hexo.config.__AUTH_LNOTE = true
        hexo.config.__DEV_ENV = true
        hexo.call(start.callName, args)
    } catch (error) {
        console.log(error)
        process.exit()
    }
})

hexo.extend.console.register(build.cmdName, async function (args) {
    try {
        await validateLicenses(hexo.config.lnote_licenses, true)
        hexo.config.__AUTH_LNOTE = true
        hexo.call(build.callName, args)
    } catch (error) {
        console.log(error)
        process.exit()
    }
})
