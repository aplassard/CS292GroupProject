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

Template.viewProject.isCreator = function() {
	return Meteor.userId() && this.creators && this.creators.indexOf(Meteor.userId()) >= 0;
}