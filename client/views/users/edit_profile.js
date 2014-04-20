Meteor.startup( function() {
  filepicker.setKey("Ao6q9xApJS3yr9PXPURZXz");
});

Template.editProfile.rendered = function() {
  filepicker.constructWidget(document.getElementById('attachment'));
}

Template.editProfile.hasPicture = function() {
  return Meteor.user() && Meteor.user().profile.picture !== undefined
}

Template.editProfile.events({
  'click #saveNameEdit': function(event) {
    var name = $('#nameInput').val();
    var company = $('#companyInput').val();
    var title= $('#titleInput').val();
    Meteor.users.update(Meteor.userId(), {$set: {'profile.name': name, 'profile.company': company, 'profile.title': title, 'profile.completed': true}});
  },

  'click #saveSkill': function(event) {
    var newSkill = $('#addSkill').val();
    $('#addSkill').val("");
    Meteor.users.update(Meteor.userId(), {$push: {'profile.skills': newSkill}});
  },

  'click #saveInterest': function(event) {
    var newSkill = $('#addInterest').val();
    $('#addInterest').val("");
    Meteor.users.update(Meteor.userId(), {$push: {'profile.interests': newSkill}});
  },

  'click .remove-skill': function(event) {
    var item = this.toString();
    Meteor.users.update(Meteor.userId(), {$pull: {'profile.skills': item}});
  },

  'click .remove-interest': function(event) {
    var item = this.toString();
    Meteor.users.update(Meteor.userId(), {$pull: {'profile.interests': item}});
  },

  'change #attachment': function(event) {
    Meteor.users.update(Meteor.userId(), {$set: {'profile.picture': $(event.currentTarget).val()}});
  }
});
