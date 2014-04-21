Template.searchUserForm.events({
  'submit form': function(event) {
    var searchTerm = $('#searchContent').val();
    var searchObject = $('select').val();
    Router.go('/users/' + searchTerm + '/' + searchObject);
  }
});
