Template.nav_bar.events({
  'click a#myProfileLink': function(event) {
    Router.go('/profile/' + Meteor.userId());
  },

  'click #request-dropdown': function(event) {
    Meteor.call('viewRequests');
  }
});
