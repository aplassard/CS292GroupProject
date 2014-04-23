Template.listProjects.projects = function() {
  return Projects.find({}, {sort:["nameLowerCase"]}).fetch();
}

Template.listProjects.events({
  'click .project-link': function(event) {
    Router.go('/projects/' + this._id);
  }
});

