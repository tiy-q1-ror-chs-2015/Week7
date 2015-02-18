var appView;
$(function() {
  var people = new StudentCollection();

  people.fetch({data: $.param({limit: 2})}).then(function() {
    appView = new StudentsView({collection: people});


  });
});