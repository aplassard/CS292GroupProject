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

  'submit #saveSkill': function(event) {
    var newSkill = $('#addSkill').val();
    $('#addSkill').val("");
    Meteor.users.update(Meteor.userId(), {$push: {'profile.skills': newSkill}});
  },

  'submit #saveInterest': function(event) {
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

  'click .leave-project': function(event) {
    var item = this;
    bootbox.confirm("Are you sure you want to leave the project?", function(result) {
      if (result)
      {
        Meteor.users.update(Meteor.userId(), {$pull: {'profile.collaborations': item}});
        Projects.update(item._id, {$pull: {'members': {'_id': Meteor.user()._id, 'name': Meteor.user().profile.name}}});
      }
    });
  },

  'change #attachment': function(event) {
    Meteor.users.update(Meteor.userId(), {$set: {'profile.picture': $(event.currentTarget).val()}});
  },
  
  'click #attachment': function(event) {
    filepicker.constructWidget(document.getElementById('attachment'));
  }
});
