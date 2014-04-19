Template.editProfile.events({
  'click a': function(event) {
    console.log($(event.currentTarget).attr('value'));
  }
});
