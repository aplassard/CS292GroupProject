Template.listProjects.hasProjects = function() {
  return Meteor.user() && ((Meteor.user().profile.collaborations && Meteor.user().profile.collaborations.length > 0) || 
    (Meteor.user().profile.ownedProjects && Meteor.user().profile.ownedProjects.length > 0))
}

Template.listProjects.projects = function() {
  var list = Meteor.user().profile.collaborations.concat(Meteor.user().profile.ownedProjects);
  return list;
}

Template.listProjects.getName = function() {
  var project =  Projects.findOne(this.toString());
  if (project) {
    return project.name;
  }
}

Template.listProjects.events({
  'click .project-link': function(event) {
    Router.go('/projects/' + this.toString());
  }
});

