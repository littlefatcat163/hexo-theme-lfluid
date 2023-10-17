/* global hexo */

'use strict';

const urlJoin = require('../utils/url-join');

/**
 * Export theme config to js
 */
hexo.extend.helper.register('export_config', function () {
  const { config, theme, lfluid_version } = this;
  const exportConfig = {
    hostname: new URL(config.url).searchParams.get('hostname') || config.url,
    root: config.root,
    version: lfluid_version,
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
  const globalFluid = { version: lfluid_version };
  return `<script id="fluid-configs">
    var LFluid = window.LFluid || ${JSON.stringify(globalFluid)};
    var CONFIG = ${JSON.stringify(exportConfig)};
  </script>`;
});
