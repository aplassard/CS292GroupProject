Router.configure( {
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return [Meteor.subscribe('notifications'), Meteor.subscribe('projectNames')];
  }
});

Router.onBeforeAction('loading');

Router.map(function() {
  this.route('home_default', {
    path: '/'
  });
  this.route('listProjects', {
    path: '/viewProjects',
    data: function() {
      return Meteor.subscribe('listProjects');
    }
  });
  this.route('editProfile', {
    path: '/profile/edit',
    data: function() {
      return Meteor.user();
    }
  });
  this.route('viewProfile', {
    path: '/profile/:_id',
    loadingTemplate: 'loading',
    waitOn: function() {
      return Meteor.subscribe('allUserData', [this.params._id]);
    },
    data: function() {
      return Meteor.users.findOne(this.params._id);
    }
  });
  this.route('searchUsers', {
    path: '/users/:_search/:_of',
    loadingTemplate: 'loading',
    waitOn: function() {
      return Meteor.subscribe('listUsers', this.params._search, this.params._of);
    },
    
    data: function() {
      return {searchTerm: this.params._search, searching: this.params._of}
    }
  });
  
  this.route('viewProject', {
    path: '/projects/:_id',
    loadingTemplate: 'loading',
    waitOn: function() {
      return Meteor.subscribe('projects', this.params._id);
    },
    data: function() {
            return Projects.findOne(this.params._id);
          }
  });

  this.route('editProject', {
    path: '/projects/edit/:_id',
    loadingTemplate: 'loading',
    waitOn: function() {
      return Meteor.subscribe('projects', this.params._id);
    },
    data: function() {
            return Projects.findOne(this.params._id);
          }
  });
});
