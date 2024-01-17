## 1.2.6

### Added

- local build and push scripts to git
- git release and tigger git action to publish npm the new version
- template vue method move to vueTsr, there is golbal util
- new tag's tab, and support promise for other tag

### Fixed

- img-swipe alt null not show title
- tag's group-image remove container class
- tag's tab use map to keep stash id, because the tag's function is no order for runtime
- font classes
- code css, supoort click to select

### Change

- uri utils param sync
- none 数据路径开放，如果是指定目录的，读取该目录下的yml数据；如果是指定yml文件，则直接读取该文件，减少资源处理，提高IO效率

## 1.2.5

### Added

- 读取 hexo basedir / src 目录下的配置，分别写入到项目中
- 启用 CSR 客户端渲染文章，开启后将去同步扫描文章对应的js目录，并读取目录下面的yml配置信息，读取到了，载入js和css，没有配置文件，则直接载入对应目录的js，默认都是esm，其他cdn的都当作是umd
- index.d.ts LNote for browser
- lnote-lightbox-caption 支持 img alt
- 处理图片，添加全局class
- img-swipe新增title，支持图片分组，img-swipe-single 和 img-swipe-group，注意： markdown 图片如果需要swipe效果，必须适用 {% gi %} 图片组，不管是一张还是多张，都将被认为一组图片
- vue 模板添加公用获取链接方法

### Changed

- html link 生成js和css部分转移到utils
- 移除自定义hexo type d.ts
- 关闭网页访问次数功能
- 调整 nonu 模板，vue3已经支持适配html attr，如果绑定的值不存在，则不会拥有该 attr
- 优化css，移除没用到的资源
- js img-swipe use native size
- noscript i18n
- enable hide post
- ~~模板数据解析支持扫描目录下的所有数据，暂不支持，每份数据规则不同，需要考虑自行处理~~

### Fixed

- ~~img-swipe 插入图片a标签不改变标签位置~~
- remove h1, because post has been title, and replace it to fs-1

## 1.2.3

### Added

- obfuscator 混淆代码

## 1.2.2

### Changed
- nprogress 转移入header
- local search replace to json
- 移除jquery的依赖
- event 移除jquery依赖
- img-swipe 移除jquery依赖
- toc 移除jquery依赖
- coding 移除jquery依赖
- 回到顶部按钮永远出现，没必要作无谓的显示隐藏动作
- photoswipe启用esm

## 1.0.8
### Added
- n 名词

### Fixed

### Changed
- 删除项目过多配置

## 1.0.2

### Added
- templates tag support ejs and vue

## 1.0.1

### Added
- image group auto display fixed size

### Fixed

### Changed


[git npm publish key](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)
