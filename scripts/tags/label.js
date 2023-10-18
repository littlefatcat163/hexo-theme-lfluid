/* global hexo */

'use strict';

const { noEndingArgs } = require('../utils/hexoTagArgs');

const label = (args) => {
  const { arr, content } = noEndingArgs(args);

  return `<span class="badge text-bg-${arr[0]}">${content}</span>`;
};

// {% label class @text %}
hexo.extend.tag.register('label', label, { ends: false });
