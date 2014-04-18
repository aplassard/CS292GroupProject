Template.editProfile.events({
  'click #addInterest': function(event) {
    console.log(this.profile.interests);
  },
  
  'click #addSkills': function(event) {
    console.log(this.profile.skills);
    this.profile.skills.push("");
  }
});
