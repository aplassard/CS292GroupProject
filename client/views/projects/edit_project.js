Template.editProject.rendered = function() {
  Session.set("projectId", this.data._id);
}

Template.editProject.currentUsers = function() {
  var proj =  Projects.findOne(Session.get('projectId'));
  if (!proj)
    return [];
  var current = proj.members || [];
  current.sort(compareUserNames);
  return current;
}

Template.editProject.pendingUsers = function() {
  var proj =  Projects.findOne(Session.get('projectId'));
  if (!proj)
    return [];
  var pending = proj.pendingUsers || [];
  pending.sort(compareUserNames);
  return pending;
}

Template.editProject.eligibleContacts = function() {
  if (Meteor.user() && Meteor.user().profile.contacts) {
    var currentAndPendingUsers = Template.editProject.currentUsers().concat(Template.editProject.pendingUsers());
    var eligibleContacts = _.reject(Meteor.user().profile.contacts,
                                    function(e) {
                                      return _.findWhere(currentAndPendingUsers, {_id: e._id});
                                    });
    eligibleContacts.sort(compareUserNames);
    return eligibleContacts;
  }
  return [];
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

  'click .remove-pending-user': function(event) {
    var user = this.user;
    bootbox.confirm("Are you sure you want to cancel this invitation?", function(result) {
      if (result)
      {
        var invite = Notifications.findOne({to: user._id, projectId: Session.get("projectId"), type: 'projectInvite'});
        if (!invite)
          return;
        Notifications.remove(invite._id);
        Projects.update(Session.get("projectId"), {$pull: {pendingUsers: user}});
      }
    });
  },

  'click .remove-current-user': function(event) {
    var user = this.user;
    var projectName = this.project;
    bootbox.confirm("Are you sure you want to remove this user from the project?", function(result) {
      if (result)
      {
        Meteor.users.update(user._id, {$pull: {"profile.collaborations": {_id: Session.get("projectId"), name: projectName}}});
        Projects.update(Session.get("projectId"), {$pull: {members: user}});
      }
    });
  },

  'click .remove-keyword': function(event) {
    Projects.update(Session.get("projectId"), {$pull: {keywords: this.item}});
  },

  'click #add-keyword': function(event) {
    var input = $('#keywordInput');
    var key = input.val();
    input.val("");
    Projects.update(Session.get("projectId"), {$push: {keywords: key}});
  },

  'click .remove-keyword': function(event) {
    Projects.update(Session.get("projectId"), {$pull: {keywords: this.item}});
  },

  'click #add-skill': function(event) {
    var input = $('#skillInput');
    var key = input.val();
    input.val("");
    Projects.update(Session.get("projectId"), {$push: {needs: key}});
  },

  'click .remove-skill': function(event) {
    Projects.update(Session.get("projectId"), {$pull: {needs: this.item}});
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
    
    var created = Projects.findOne(Session.get('projectId')).created;
    if (created == null)
    {
      created = new Date();
      Meteor.users.update(Meteor.userId(), {$push: {'profile.ownedProjects': {'_id': this._id, 'name': "New Project"}}});
    }
    
    Projects.update(Session.get('projectId'), {$set: {
      name: name,
      created: created,
      nameLowerCase: name.toLowerCase(),
      description: description
    }}, {}, function(affect) {
      console.log(affect);
    });
  },

  'click #delete-project': function() {
    var id = this._id;
    bootbox.confirm("Are you sure you want to delete the project?", function(result) {
      if (result)
      {
        Meteor.call('deleteProject', {'_id': id});
        Router.go("/");
      }
    });
  }
});

Template.editProject.destroyed = function() {
  var proj = Projects.findOne(Session.get('projectId'));
  if (proj && proj.created == null) {
    Meteor.call('deleteProject', {'_id': proj._id});
  }
}