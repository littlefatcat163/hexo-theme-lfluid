const lnoteEachUtil = require('lnote-cmds/dist/lnote-eachUtil.cjs')

hexo.extend.console.register(
  "bd6810898c6d3aaebc9a8c779bfedbdfdc3dac44d6e38d9624b7a80d851dfd230ff03739119d1df9bf3f2497604e789969d1846316c2853ba45f961b77e69614",
  async function (args) {
    try {
      await lnoteEachUtil.checkAuthCode(hexo.config.lnote_licenses)
      hexo.config.minify.enable = false
      hexo.config.__AUTH_LNOTE = true
      hexo.call("server", args)
    } catch (error) {
      console.log(error)
      process.exit()
    }
  }
);

hexo.extend.console.register(
  "62ca25dbe39babfbdb48542f55146778943cff2b6ad7becf510b4263caebdf00a94ee0e8199f7a571990f1f25077a4c7ec65e22ae495a90caf7b380c95682bf2",
  async function (args) {
    try {
      await lnoteEachUtil.checkAuthCode(hexo.config.lnote_licenses)
      hexo.config.__AUTH_LNOTE = true
      hexo.call("generate", args)
    } catch (error) {
      console.log(error)
      process.exit()
    }
  }
);
