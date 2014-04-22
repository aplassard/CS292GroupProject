Template.requestList.requests = function() {
  return Notifications.find({to: Meteor.userId()})
};

Template.requestList.hasRequests = function() {
  return Notifications.find({to: Meteor.userId()}).count() > 0;
};

Template.requestList.events({
  'click #acceptRequest': function(event) {
    Meteor.call('addContact', this._id);
  },

  'click #rejectRequest': function(event) {
    Notifications.remove(this._id);
  }
});
