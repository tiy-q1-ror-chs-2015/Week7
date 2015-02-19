// Model View
var StudentView = Backbone.View.extend({
    tagName: 'article',
    template: _.template($('#studentTmpl').text()),
    events: {
      "click .deleteStudent": "deleteStudent",
      "click .showEdit": "showEdit",
      "submit .editForm": "submitEdit"
    },
    initialize: function() {
      console.log('student view is made');
    },
    showEdit: function() {
      this.$('.editForm').toggleClass('show');
    },
    submitEdit: function(event) {
      console.log('submit edit');
      event.preventDefault();
      this.model.set({
        name: this.$('input[name="editName"]').val(),
        bio: this.$('textarea[name="editBio"]').val(),
        wingspan: this.$('input[name="editWingspan"]').val()
      });

      this.model.save();
      this.render();

    },
    render: function() {
      var markup = this.template(this.model.attributes);
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
var testView = Backbone.View.extend({
  el: $('.container'),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html("<h1> hi this is cool</h1>");
    return this;
  }
});

var AddStudentView = Backbone.View.extend({
  tagName: 'section',
  template: _.template($('#addStudentTmpl').html()),
  initialize: function() {
    this.render();
    $('.container').append(this.el);
    
  },
  events: {
    'submit #createStudent': 'submitStudent'
  },
  render: function() {
    this.$el.html(this.template({data: 'something'}));
    return this;
  },
  submitStudent: function() {
    event.preventDefault();

      var mine = this.$el.find('#createStudent');
      var newStudent = {
        
          name:  mine.find('input[name="name"]').val(),
          bio: mine.find('textarea[name="bio"]').val(),
          wingspan: mine.find('input[name="wingspan"]').val(),
          photo: mine.find('input[name="photo"]').val()
        
      };
     this.model = new Student(newStudent);
      this.model.save();
      App.router.navigate('/', true);
  }
});


// Collection View
var StudentsView = Backbone.View.extend({
    tagName: 'section',
    initialize: function() {
      console.log("im defined!");
      this.render();
      $('.container').append(this.el);

    },

    events: {
      "submit #createStudent": "createStudent"
    },
    render: function() {
      this.addAll();
      return this;
    },
    addOne: function(studentModel) {
      
      var studentView = new StudentView({model: studentModel});
      this.$el.append(studentView.render().el);

    },
    addAll: function() {

      _.each(this.collection.models, this.addOne, this);

    },
    createStudent: function(event) {
      event.preventDefault();

      var mine = this.$el.find('#createStudent');
      var newStudent = {
        
          name:  mine.find('input[name="name"]').val(),
          bio: mine.find('textarea[name="bio"]').val(),
          wingspan: mine.find('input[name="wingspan"]').val(),
          photo: mine.find('input[name="photo"]').val()
        
      };
      var studentModel = new Student(newStudent);
      studentModel.save();
    }

    // params.require(:student).permit()
    // { student: { name: "", bio: "", ... } }
});














