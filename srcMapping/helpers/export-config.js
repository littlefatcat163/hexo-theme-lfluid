/* global hexo */

'use strict';

const urlJoin = require('../utils/url-join');

/**
 * Export theme config to js
 */
hexo.extend.helper.register('export_config', function () {
  const { config, theme, lnote_version } = this;
  const exportConfig = {
    hostname: new URL(config.url).searchParams.get('hostname') || config.url,
    root: config.root,
    version: lnote_version,
  };
  const globalLnote = { version: lnote_version };
  return `<script id="lnote-configs">
    var LNote = window.LNote || ${JSON.stringify(globalLnote)};
    var CONFIG = ${JSON.stringify(exportConfig)};
  </script>`;
});
