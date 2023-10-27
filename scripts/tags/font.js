/* global hexo */

'use strict';

const { noEndingArgs } = require('hexo-theme-lnote/scripts/utils/hexoTagArgs');

const hasKeyword = (arr, kw) => {
  return arr.some(item => item === kw)
}

const font = (args) => {
  const { arr, content } = noEndingArgs(args);
  const classes = [];
  const [ type ] = arr;
  // 1. 出现 bg 表示当前颜色作用到背景上
  if (hasKeyword(arr, 'bg')) {
    classes.push(`text-bg-${type}`);
  } else {
    classes.push(`text-${type}`);
  }

  // 2. 出现 b 表示粗体
  if (hasKeyword(arr, 'b')) {
    classes.push('fw-bold');
  }

  // 3. 出现数字，表示字体大小，范围 1 ~ 6，类似 h1 ~ h6的字体大小
  const size = arr.find(item => /^[1,2,3,4,5,6]$/.test(item));
  if (size != null) {
    classes.push(`fs-${size}`);
  }

  return `<font class="${classes.join(' ')}" style="padding: 0 0.25rem">${content}</font>`;
};

hexo.extend.tag.register('font', font, { ends: false });
