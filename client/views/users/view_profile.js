Template.viewProfile.hasPicture = function() {
  return Meteor.user() && Meteor.user().profile.picture !== undefined
}

Template.viewProfile.isMe = function() {
  return Meteor.userId() && Meteor.userId() === this._id
}

var checkNotContact = function(contacts, id) {
  return contacts.every(function(element) {
    if (element._id === id) {
      return false;
    } else {
      return true;
    }
  });
}

Template.viewProfile.notContact = function() {
  if (Meteor.user() && Meteor.user().profile.contacts && this.profile) {
    var result = checkNotContact(Meteor.user().profile.contacts, this._id);
    console.log(result);
    return result;
  } else {
    return true;
  }
}

Template.viewProfile.notPending = function() {
  return Meteor.user() && !(Meteor.user().profile.pendingContacts && Meteor.user().profile.pendingContacts.indexOf(this._id) >= 0);
}

Template.viewProfile.events({
  'click #addContact': function(event) {
    Notifications.insert({
      to: this._id, 
      from: Meteor.userId(), 
      fromName: Meteor.user().profile.name, 
      type: 'contactRequest', 
      date: new Date(), 
      viewed: false
    });
    Meteor.users.update(Meteor.userId(), {$push: {'profile.pendingContacts': this._id}});
  },

  'click #removeContact': function(event) {
    Meteor.call('removeContact', this._id, Meteor.userId());
  }
});
