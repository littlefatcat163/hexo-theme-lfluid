/* global hexo */

'use strict';

const navlink = (args) => {
  return ''
};

// {% label class @text %}
hexo.extend.tag.register('template', navlink, { ends: false });
