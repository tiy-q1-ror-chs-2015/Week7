var Student = Backbone.Model.extend({
  urlRoot: 'http://localhost:9000/students',
  defaults: function() {
    return {
      name: 'Joette Smoe',
      gender: 'Choose Not to Disclose',
      wingspan: '10ft',
      photo: 'http://www.placecage.com/100/100'
    };
  }, 
  initialize: function() {
    console.log("student has been initialized!");
  },
  toJSON: function() {
    return {student: this.attributes};
  }
});