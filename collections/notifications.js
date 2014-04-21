Notifications = new Meteor.Collection("notifications");

Notifications.allow({
  insert: function(userId, doc) {
            return (userId && doc.from === userId)
          }
});

var areContacts = function(contacts, id) {
  return !contacts.every(function(element) {
    if (element._id === id) {
      return false;
    }
  });
}

Meteor.methods({
  'removeContact': function(otherId, myId) {
    if (!this.isSimulation) {
      console.log("my " + myId + " other " + otherId);
      check(otherId, String);
      check(myId, String);
      if (this.userId === myId) {
        var me = Meteor.users.findOne(myId);
        var him = Meteor.users.findOne(otherId);
        check(me, Object);
        check(him, Object);
        if (areContacts(me.profile.contacts, him._id)) {
          Meteor.users.update(otherId, {$pull: {'profile.contacts': {_id: myId, name: me.profile.name}}});
          Meteor.users.update(myId, {$pull: {'profile.contacts': {_id: otherId, name: him.profile.name}}});
        } else {
          throw new Meteor.Error(500, "Update Failed", "Could not remove contact")
        }
      }
    }
  },

  'addContact': function(requestId) {
    if (!this.isSimulation) {
      check(requestId, String);
      var request = Notifications.findOne(requestId);
      var error = false;
      if (request && request.to === this.userId) {
        var me = Meteor.users.findOne(request.to);
        var him = Meteor.users.findOne(request.from);
        if (me && him) {
          Meteor.users.update(me._id, {$push: {'profile.contacts': {_id: him._id, name: him.profile.name}}});
          Meteor.users.update(him._id, {$push: {'profile.contacts': {_id: me._id, name: me.profile.name}}}); 
          Meteor.users.update(him._id, {$pull: {'profile.pendingContacts': me._id}});
          Notifications.remove(requestId);
        } else {
          error = true;
        }
      } else {
        error = true;
      }
      if (error) {
        throw new Meteor.error(500, "Update Failed", "Could not add contact")
      }
    }
  }
});
