/* global Lnote */

Lnote.boot = {};

Lnote.boot.registerEvents = function() {
  Lnote.events.billboard();
  Lnote.events.registerNavbarEvent();
  Lnote.events.registerParallaxEvent();
  Lnote.events.registerScrollDownArrowEvent();
  Lnote.events.registerScrollTopArrowEvent();
  Lnote.events.registerImageLoadedEvent();
};

Lnote.boot.refresh = function() {
  Lnote.plugins.fancyBox();
  Lnote.plugins.codeWidget();
  Lnote.events.refresh();
};

document.addEventListener('DOMContentLoaded', function() {
  Lnote.boot.registerEvents();
});
