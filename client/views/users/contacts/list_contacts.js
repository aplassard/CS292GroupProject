Template.listContacts.events({
  'click a': function(event) {
    Router.go('/profile/' + this._id);
  }
});
