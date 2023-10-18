/* global hexo */

'use strict';

const mappingIcon = (kw) => {
  if (['info', 'success', 'warning', 'danger'].some(item => item === kw)) {
    return `<svg class="bi flex-shrink-0 me-2" role="img" width="1.2em" height="1.2em" style="margin-top: 0.2rem"><use xlink:href="#${kw}"/></svg>`;
  }
  return '';
}

const note = (args, content) => {
  const alertType = args[0] || 'info';
  const iconType = args[1];

  return `<div class="note alert alert-${alertType} d-flex align-items-top" role="alert">
            ${mappingIcon(iconType)}
            ${hexo.render.renderSync({ text: content, engine: 'markdown' }).split('\n').join('')}
          </div>`;
};

/*
  {% note class %}
  text
  {% endnote %}
 */
hexo.extend.tag.register('note', note, { ends: true });
