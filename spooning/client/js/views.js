// Model View
var StudentView = Backbone.View.extend({
    tagName: 'article',
    template: _.template($('#studentTmpl').text()),
    events: {
      "click button": "deleteStudent"
    },
    initialize: function() {
      console.log('student view is made');
    },
    render: function() {
      var markup = this.template(this.model.toJSON());
      this.$el.html(markup);
      return this;
    },
    deleteStudent: function() {
      // DELETE /students/:id
      // /students/52.json
      this.model.destroy();
      this.$el.remove();

    }
});


// Collection View
var StudentsView = Backbone.View.extend({
    el: $('.container'),
    initialize: function() {
      console.log("im defined!");
      this.addAll();

    },
    addOne: function(studentModel) {
      
      var studentView = new StudentView({model: studentModel});
      this.$el.append(studentView.render().el);

    },
    addAll: function() {

      _.each(this.collection.models, this.addOne, this);

    }
});














