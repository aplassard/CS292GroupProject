Template.listContacts.hasContacts = function() {
  return this.profile && this.profile.contacts && this.profile.contacts.length > 0;
}

Template.listContacts.contacts = function() {
  if (!Template.listContacts.hasContacts)
    return null;
  this.profile.contacts.sort(function(a,b) {return a.name.localeCompare(b.name);});
  return this.profile.contacts;
}

Template.listContacts.events({
  'click .contact-link': function(event) {
    Router.go('/profile/' + this._id);
  }
});
