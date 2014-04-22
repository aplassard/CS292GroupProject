Template.nav_bar.events({
  'click a#myProfileLink': function(event) {
    Router.go('/profile/' + Meteor.userId());
  },

  'click #request-dropdown': function(event) {
    Meteor.call('viewRequests');
  },

  'click #createNewProject': function(event) {
    if (Meteor.user()) {
      Projects.insert({name: "", owners: [{_id: Meteor.userId(), name: Meteor.user().profile.name}], created: new Date()}, function(err, _id) {
        Router.go("/projects/edit/" + _id);
      });
    }
  }
});
