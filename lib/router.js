Router.configure( {
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home_default', {
    path: '/'
  });
  this.route('editProfile', {
    path: '/profile/edit',
    data: function() {
      return Meteor.user() || {name: "", interests: [""], skills: [""]};
    }
  });
  this.route('viewProfile', {
    path: '/profile/:_id',
    data: function() {
      return Meteor.users.findOne(this.params._id);
    }
  });
});
