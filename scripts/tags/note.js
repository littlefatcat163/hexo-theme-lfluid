/* global hexo */

'use strict';

const mappingIcon = (kw) => {
  if (['info', 'success', 'warning', 'danger'].some(item => item === kw)) {
    return `<svg class="bi flex-shrink-0 me-2" role="img" width="1.2em" height="1.2em"><use xlink:href="#lf-${kw}"/></svg>`;
  }
  return '';
}

const note = (args, content) => {
  if (!args || !args[0] || args[0].toLowerCase() === "default") {
    args = [ hexo.theme.config.post.updated.note_class || "info"];
  }
  return `<div class="note alert alert-${args.join(' ')} d-flex align-items-center" role="alert">
            ${mappingIcon(args[0])}
            ${hexo.render.renderSync({ text: content, engine: 'markdown' }).split('\n').join('')}
          </div>`;
};

/*
  {% note class %}
  text
  {% endnote %}
 */
hexo.extend.tag.register('note', note, { ends: true });
