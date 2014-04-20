Template.viewProfile.hasPicture = function() {
  return Meteor.user() && Meteor.user().profile.picture !== undefined
}

Template.viewProfile.isMe = function() {
  return Meteor.userId() && Meteor.userId() === this._id
}

