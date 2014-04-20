Template.home_default.profileNotComplete = function() {
  return Meteor.user().profile.completed == undefined;
}
