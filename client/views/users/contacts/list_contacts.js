Template.listContacts.hasContacts = function() {
  return this.profile && this.profile.contacts && this.profile.contacts.length > 0;
}

Template.listContacts.events({
  'click a': function(event) {
    Router.go('/profile/' + this._id);
  }
});
