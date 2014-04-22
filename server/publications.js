Meteor.publish('allUserData', function(ids) {
  if (this.userId) {
    return Meteor.users.find({_id: {$in: ids}}, {fields: {_id: 1, profile: 1, username: 1}});
  } else {
    return
  }
});

Meteor.publish('projectNames', function() {
  return Projects.find({}, {fields: {_id: 1, name: 1}});
});

Meteor.publish('listProjects', function() {
    return Projects.find({}, {fields: {_id: 1, name: 1, description: 1, owners: 1}});
});

// short 'n sweet: http://stackoverflow.com/questions/3446170
function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

Meteor.publish('listUsers', function(searchTerm, searchWhat) {
  if (this.userId) {
    var searchObject = {}
    if (searchWhat === "name") {
      if (searchTerm) {
        var regex = new RegExp("\w*" + escapeRegExp(searchTerm) + "\w*", 'i');
        searchObject = {$or: [{username: regex}, {'profile.name': regex}]};
      }
    } else {
      if (searchTerm) {
        if (searchWhat === 'skills') {
          var regex = new RegExp(escapeRegExp(searchTerm), 'i');
          searchObject = {'profile.skills': regex};
        } else {
          searchObject = {'profile.interests': regex};
        }
      }
    }
    console.log(searchObject);
    return Meteor.users.find(searchObject, {fields: {_id: 1, 'profile.name': 1, 'profile.picture': 1}});
  } else {
    return;
  }
});

Meteor.publish('notifications', function() {
  return Notifications.find({to: this.userId});
});

Meteor.publish('projects', function(id) {
  return Projects.find(id);
});
