/* global hexo */

'use strict';

const navlink = (args) => {
  args = args.join(' ').split('@');
  const href = args[0];
  const text = args[1];

  let __href = href;
  if (!__href.startsWith(hexo.config.root)) {
      __href = `${hexo.config.root}${__href.replace('/', '')}`
  }

  !text && hexo.log.warn('[LFluid] navlink text must be defined!');

  return `<blockquote><p><a class="fl-nav-link" href="${__href}"><svg width="32" height="32"><use xlink:href="#lf-tap-link"></use></svg> ${text}</a></p></blockquote>`;
};

// {% label class @text %}
hexo.extend.tag.register('navlink', navlink, { ends: false });
