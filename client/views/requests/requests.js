Template.requests.getRequests = function() {
  return Notifications.find({to: Meteor.userId()});
};

Template.requests.requestCount = function(){
  return Notifications.find({to: Meteor.userId(), viewed: false}).count();
};

Template.requests.hasRequests = function() {
  return Notifications.find({to: Meteor.userId()}).count()
}

Template.request.getMessage = function() {
  if (this.type === "contactRequest") {
    return "sent a contact request. Click to confirm";
  }
}

var fromRequestName = function(user) {
  return getUsername(user);
}

Template.request.events({
  'click a.confirm-request': function() {
  },
});
