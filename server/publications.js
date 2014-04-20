Meteor.publish('allUserData', function(ids) {
  if (this.userId) {
    return Meteor.users.find({_id: {$in: ids}}, {fields: {_id: 1, profile: 1, username: 1}});
  } else {
    return
  }
});

Meteor.publish('listUsers', function(searchTerm, searchWhat) {
  var searchObject = {}
  switch (searchWhat) {
    case 'name':
      if (searchTerm) {
        var regex = new RegExp("\w*" + searchTerm + "\w*", 'i');
        searchObject = {$or: [{username: regex}, {'profile.name': regex}]};
      }
      break;
    default:
      if (searchTerm) {
        // searchWhat should contain 'profile.skills or profile.interest'
        searchObject = {searchWhat: searchTerm}
      }
  }
  return Meteor.users.find({}, {fields: {_id: 1, 'profile.name': 1, 'profile.picture': 1}});
});
