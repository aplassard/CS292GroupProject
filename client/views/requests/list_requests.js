Template.requestList.requests = function() {
  return Notifications.find({to: Meteor.userId()})
};

Template.requestList.hasRequests = function() {
  return Notifications.find({to: Meteor.userId()}).count() > 0;
};

Template.requestList.isContact = function() {
  return this.type === 'contactRequest';
}

Template.requestList.events({
  'click #acceptRequest-contact': function(event) {
    Meteor.call('addContact', this._id);
  },

  'click #acceptRequest-project': function(event) {
    Meteor.call('acceptProject', this._id);
  },

  'click .reject-request': function(event) {
    Notifications.remove(this._id);
  }
});
