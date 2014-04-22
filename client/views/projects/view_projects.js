Template.viewProject.keywords = function() {
  var proj =  Projects.findOne(this._id);
  if (proj)
    return proj.keywords;
}
Template.viewProject.hasKeywords = function() {
  var proj =  Projects.findOne(this._id);
  if (proj)
    return proj.keywords.length > 0;
}
Template.viewProject.needs = function() {
  var proj = Projects.findOne(this._id);
  if (proj)
    return proj.needs;
}
Template.viewProject.hasNeeds = function() {
  var proj = Projects.findOne(this._id);
  if (proj)
    return proj.needs.length > 0;
}

var notCreator = function(array, id) {
  return array.every(function(elem) {
    if (elem._id === id) {
      return false;
    } else {
      return true;
    }
  });
}

Template.viewProject.hasMembers = function() {
  return this.members && this.members.length > 0;
}

Template.viewProject.isOwner = function() {
	return Meteor.userId() && this.owners && !notCreator(this.owners, Meteor.userId());
}
