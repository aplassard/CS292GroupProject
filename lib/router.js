Router.configure( {
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('notifications');
  }
});

Router.map(function() {
  this.route('home_default', {
    path: '/'
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
});
