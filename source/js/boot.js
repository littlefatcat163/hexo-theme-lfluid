/* global LFluid */

LFluid.boot = {};

LFluid.boot.registerEvents = function() {
  LFluid.events.billboard();
  LFluid.events.registerNavbarEvent();
  LFluid.events.registerParallaxEvent();
  LFluid.events.registerScrollDownArrowEvent();
  LFluid.events.registerScrollTopArrowEvent();
  LFluid.events.registerImageLoadedEvent();
};

LFluid.boot.refresh = function() {
  LFluid.plugins.fancyBox();
  LFluid.plugins.codeWidget();
  LFluid.events.refresh();
};

document.addEventListener('DOMContentLoaded', function() {
  LFluid.boot.registerEvents();
});
