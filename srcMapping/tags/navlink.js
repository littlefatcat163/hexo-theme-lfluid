/* global hexo */

'use strict';
const { noEndingArgs } = require('../utils/hexoTagArgs');

const navlink = (args) => {
  const { arr, content } = noEndingArgs(args);
  const href = arr[0];

  let __href = href;
  if (!__href.startsWith(hexo.config.root)) {
      __href = `${hexo.config.root}${__href.replace('/', '')}`
  }

  return `<blockquote><p><a class="fl-nav-link" href="${__href}"><svg width="32" height="32"><use xlink:href="#tap-link"></use></svg> ${content}</a></p></blockquote>`;
};

// {% label class @text %}
hexo.extend.tag.register('navlink', navlink, { ends: false });
