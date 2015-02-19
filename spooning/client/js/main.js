var App = {};
$(function() {
  App.router = new AppRouter();
  Backbone.history.start();
});