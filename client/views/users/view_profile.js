Template.viewProfile.hasPicture = function() {
  return Meteor.user() && Meteor.user().profile.picture !== undefined
}

