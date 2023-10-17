'use strict';

module.exports = (hexo) => {
  if (hexo.theme.has_hello) {
    return;
  }

  hexo.theme.has_hello = true;
};
