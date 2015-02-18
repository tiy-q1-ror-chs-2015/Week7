var StudentCollection = Backbone.Collection.extend({
  url: 'http://localhost:9000/students',
  initialize: function() {
    console.log("student collection in da houzzze!");
  }
});