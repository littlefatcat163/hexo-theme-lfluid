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
    typing: theme.fun_features.typing,
    anchorjs: theme.fun_features.anchorjs,
    progressbar: theme.fun_features.progressbar,
    code_language: theme.code.language,
    copy_btn: theme.code.copy_btn,
    image_caption: theme.post.image_caption,
    image_zoom: theme.post.image_zoom,
    toc: theme.post.toc,
    lazyload: theme.lazyload,
    web_analytics: theme.web_analytics,
    search_path: urlJoin(config.root, theme.search.path),
    include_content_in_search: theme.search.content,
  };
  const globalLnote = { version: lnote_version };
  return `<script id="lnote-configs">
    var LNote = window.LNote || ${JSON.stringify(globalLnote)};
    var CONFIG = ${JSON.stringify(exportConfig)};
  </script>`;
});
