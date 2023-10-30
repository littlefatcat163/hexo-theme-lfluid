'use strict';

const urlJoin = function(base, relative) {
  if (/^https*:\/\//.test(relative) || /^\/\//.test(relative)) {
    return relative;
  }
  return relative
    ? base.replace(/\/+$/, '') + '/' + relative.replace(/^\/+/, '')
    : base;
};

module.exports = urlJoin;
