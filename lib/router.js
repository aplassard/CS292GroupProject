Router.configure( {
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home_default', {
    path: '/'
  });
  this.route('gameFeed', {
    path: '/gameFeed/:_id',
    data: function() {
      return Games.findOne(this.params._id);
    }
  });
  this.route('createGame', {
    path: '/start'
  });
  this.route('listScores', {
    path: '/list'
  });
});
