/* global LNote */

LNote.boot = {};

LNote.boot.registerEvents = function() {
  LNote.events.billboard();
  LNote.events.registerNavbarEvent();
  LNote.events.registerParallaxEvent();
  LNote.events.registerScrollDownArrowEvent();
  LNote.events.registerScrollTopArrowEvent();
  LNote.events.registerImageLoadedEvent();
};

LNote.boot.refresh = function() {
  LNote.plugins.fancyBox();
  LNote.plugins.codeWidget();
  LNote.events.refresh();
};

document.addEventListener('DOMContentLoaded', function() {
  LNote.boot.registerEvents();
});
