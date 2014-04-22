Projects = new Meteor.Collection("projects");

Projects.allow({
  insert: function(userId, doc) {
            return (userId && doc.creators.length === 1 && doc.creators[0] === userId);
          },
  update: function(userId, doc) {
            return (userId && !doc.creators.every(function(elem) {
              if (userId === elem._id) {
                return false;
              }
            }));
          }
});
