Template.nav_bar.events({
  'click a#myProfileLink': function(event) {
    Router.go('/profile/' + Meteor.userId());
  },

  'click #request-dropdown': function(event) {
    Meteor.call('viewRequests');
  },

  'click #createNewProject': function(event) {
    Projects.insert({name: "", creators: [Meteor.userId()], created: new Date()}, function(err, _id) {
      console.log(_id);
      Router.go("/projects/" + _id + '/edit');
    });
  }
});
