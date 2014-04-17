Meteor.publish("games", function(id) {
  return Games.find();
});
