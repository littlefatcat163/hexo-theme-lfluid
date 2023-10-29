import fs from 'fs'
import path from 'path'
import * as objUtil from '../../utils/object'

export default (hexo: any) => {
    const isZh = hexo.theme.i18n.languages[0].search(/zh-CN/i) !== -1

    let dataConfig = {}
    let dataStaticConfig = {}

    if (hexo.locals.get instanceof Function) {
        const data = hexo.locals.get('data')
        if (data && objUtil.isNotEmptyObject(data.fluid_config)) {
            dataConfig = data.fluid_config
        } else if (!configFromRoot(hexo)) {
            if (isZh) {
                hexo.log.warn('请使用 [LNote] 最新版本')
            } else {
                hexo.log.warn('Please [LNote] install lateset version')
            }
        }
        if (data && objUtil.isNotEmptyObject(data.fluid_static_prefix)) {
            dataStaticConfig = data.fluid_static_prefix
        }

        const { language } = hexo.config
        const { i18n } = hexo.theme
        const langConfigMap: any = {}
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                if (/^languages\/.+$/.test(key)) {
                    langConfigMap[key.replace('languages/', '')] = data[key]
                }
            }
        }
        if (objUtil.isNotEmptyObject(langConfigMap)) {
            const mergeLang = (lang: string) => {
                if (langConfigMap[lang]) {
                    i18n.set(
                        lang,
                        objUtil.merge({}, i18n.get([lang]), langConfigMap[lang])
                    )
                }
            }
            if (Array.isArray(language)) {
                for (const lang of language) {
                    mergeLang(lang)
                }
            } else {
                mergeLang(language)
            }
            if (isZh) {
                hexo.log.debug(
                    '[LNote] 读取 source/_data/languages/*.yml 文件覆盖语言配置'
                )
            } else {
                hexo.log.debug(
                    '[LNote] Merge language config from source/_data/languages/*.yml'
                )
            }
        }
    }

    if (objUtil.isNotEmptyObject(hexo.config.theme_config)) {
        hexo.theme.config = objUtil.merge(
            {},
            hexo.theme.config,
            hexo.config.theme_config
        )
        if (isZh) {
            hexo.log.debug(
                '[LNote] 读取 _config.yml 中 theme_config 配置项覆盖主题配置'
            )
        } else {
            hexo.log.debug(
                '[LNote] Merge theme config from theme_config in _config.yml'
            )
        }
    }

    if (objUtil.isNotEmptyObject(dataStaticConfig)) {
        hexo.theme.config.static_prefix = objUtil.merge(
            {},
            hexo.theme.config.static_prefix,
            dataStaticConfig
        )
        if (isZh) {
            hexo.log.debug(
                '[LNote] 读取 source/_data/fluid_static_prefix.yml 文件覆盖主题配置'
            )
        } else {
            hexo.log.debug(
                '[LNote] Merge theme config from source/_data/fluid_static_prefix.yml'
            )
        }
    }

    if (objUtil.isNotEmptyObject(dataConfig)) {
        hexo.theme.config = objUtil.merge({}, hexo.theme.config, dataConfig)
        if (isZh) {
            hexo.log.debug(
                '[LNote] 读取 source/_data/fluid_config.yml 文件覆盖主题配置'
            )
        } else {
            hexo.log.debug(
                '[LNote] Merge theme config from source/_data/fluid_config.yml'
            )
        }
    }

    hexo.log.debug(
        '[LNote] Output theme config:\n',
        JSON.stringify(hexo.theme.config, undefined, 2)
    )
}

const configFromRoot = (hexo: any) => {
    const configPath = path.join(hexo.base_dir, '_config.lnote.yml')
    return fs.existsSync(configPath)
}
