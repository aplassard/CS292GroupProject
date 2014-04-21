Template.searchUsers.userList = function() {
  return Meteor.users.find();
}

Template.searchUsers.notMe = function() {
  return Meteor.userId() && Meteor.userId() !== this._id;
}

Template.hasResults = function() {
  return Meteor.users.find().count() > 1;
}
