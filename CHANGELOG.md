## 1.2.5

### Added

- 读取 hexo basedir / src 目录下的配置，分别写入到项目中
- 启用 CSR 客户端渲染文章，开启后将去同步扫描文章对应的js目录，并读取目录下面的yml配置信息，读取到了，载入js和css，没有配置文件，则直接载入对应目录的js，默认都是esm，其他cdn的都当作是umd

### Changed

- html link 生成js和css部分转移到utils

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