Template.editProject.rendered = function() {
  Session.set("projectId", this.data._id);
}

Template.editProject.contacts = function() {
  if (Meteor.user()) {
    return Meteor.user().profile.contacts;
  }
}

Template.editProject.keywords = function() {
  var proj =  Projects.findOne(Session.get('projectId'));
  if (proj)
    return proj.keywords;
}

Template.editProject.needs = function() {
  var proj = Projects.findOne(Session.get('projectId'));
  if (proj)
    return proj.needs;
}

Template.editProject.events({
  'click .user-list': function(event) {
    var target = $(event.currentTarget)
    if (target.hasClass('list-group-item-success')) {
      target.removeClass('list-group-item-success');
    } else {
      target.addClass('list-group-item-success');
    }
  },

  'click #add-keyword': function(event) {
    var input = $('#keywordInput');
    var key = input.val();
    input.val("");
    Projects.update(Session.get("projectId"), {$push: {keywords: key}});
  },

  'click .remove-keyword': function(event) {
    Projects.update(Session.get("projectId"), {$pull: {keywords: this.toString()}});
  },

  'click #add-skill': function(event) {
    var input = $('#skillInput');
    var key = input.val();
    input.val("");
    Projects.update(Session.get("projectId"), {$push: {needs: key}});
  },

  'click .remove-skill': function(event) {
    Projects.update(Session.get("projectId"), {$pull: {needs: this.toString()}});
  },

  'submit form': function(event) {
    var name = $('#nameInput').val();

    var description = $('#descriptionInput').val();
    $('.user-list').each(function(i) {
      if ($(this).hasClass('list-group-item-success')) {
        var userArr = $(this).attr('value').split('---');
        var userObj = {name: userArr[1], _id: userArr[0]};
        Projects.update(Session.get("projectId"), {$push: {pendingUsers: userObj}});
        Notifications.insert({
          to: userObj._id, 
          from: Meteor.userId(), 
          fromName: Meteor.user().profile.name, 
          projectName: name, 
          projectId: Session.get("projectId"),
          type: 'projectInvite'
        });
      }
    });
    Projects.update(Session.get('projectId'), {$set: {
      name: name,
      description: description
    }}, {}, function(affect) {
      console.log(affected);
    });
    var route = "/project/" + this._id;
    console.log(route);
    Router.go(route);
  },

  'click #delete-project': function() {
    if (confirm("Delete Project?")) {
      Projects.remove(this._id);
    }
  }
});
