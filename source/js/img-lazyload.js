/* global LNote, CONFIG */

(function(window, document) {
  for (const each of document.querySelectorAll('img[lazyload]')) {
    LNote.utils.waitElementVisible(each, function() {
      each.removeAttribute('srcset');
      each.removeAttribute('lazyload');
    }, CONFIG.lazyload.offset_factor);
  }
})(window, document);
