/* global hexo */

'use strict';

const urlJoin = require('../utils/url-join');

/**
 * Export theme config to js
 */
hexo.extend.helper.register('export_config', function () {
  const { config, lnote_version } = this;
  const globalLnote = { version: lnote_version, root: config.root };
  return `<script id="lnote-configs">
    var LNote = window.LNote || ${JSON.stringify(globalLnote)};
  </script>`;
});
