/* global hexo */

'use strict';

hexo.on('generateBefore', () => {
  require('./lib/injects')(hexo);
});
