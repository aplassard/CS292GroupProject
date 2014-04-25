///////////////////////////////////////////////////////////////////////////////
// Projects

/*
  Each project is represented by a document in the Projects collection:
  	name: String
  	nameLowerCase: String in lower-case for case-insensitive sorting
  	created: timestamp project was created, or null if project hasn't been saved yet
  	description: String
  	owners: user ids of project admins
  	members: user ids of project members
    keywords: array of all skills used in the project
    needs: array of skills the project is currently looking for
*/
Projects = new Meteor.Collection("projects");

Projects.allow({
  insert: function(userId, doc) {
            return (userId && doc.owners.length >= 1 && doc.owners[0]._id === userId);
          },
  update: function(userId, doc) {
            return (userId && !doc.owners.every(function(elem) {
              if (userId === elem) {
                return false;
              }
            }));
          },
  remove: function(userId, doc) {
            return (userId && !doc.owners.every(function(elem) {
              if (userId === elem) {
                return false;
              }
            }));
          }
});


var NonEmptyString = Match.Where(function (x) {
  check(x, String);
  return x.length !== 0;
});

var NonEmptyArray = Match.Where(function (x) {
  check(x, Array);
  return x.length !== 0;
});

createProject = function (options) {
  var id = Random.id();
  Meteor.call('createProject', _.extend({ _id: id }, options));
  return id;
};

Meteor.methods({
  // options should include: name, description, owners, keywords
  createProject: function (options) {
    check(options, {
      name: NonEmptyString,
      created: Match.Optional(Date),
      description: String,
      owners: NonEmptyArray,
      members: Match.Optional([Object]),
      keywords: NonEmptyArray,
      needs: Match.Optional(NonEmptyArray),
      _id: Match.Optional(NonEmptyString)
    });

    if (options.name.length > 242)
      throw new Meteor.Error(413, "Name too long");
    if (options.description.length > 5000)
      throw new Meteor.Error(413, "Description too long");

    var id = options._id || Random.id();
    Projects.insert({
      _id: id,
      owners: options.owners,
      name: options.name,
      nameLowerCase: options.name.toLowerCase(),
      created: options.created,
      description: options.description,
      members: options.members ? options.members : [],
      keywords: options.keywords,
      needs: options.needs ? options.needs : []
    });
    return id;
  },

  deleteProject: function (options) {
    check(options, {_id: NonEmptyString});

    var proj = Projects.findOne(options._id);
    if (proj == null)
      throw new Meteor.Error(413, "Project id does not exist");

    for(var i in proj.owners)
        Meteor.users.update(proj.owners[i]._id, {$pull: {'profile.ownedProjects': {'_id': proj._id}}});
    for(var i in proj.members)
        Meteor.users.update(proj.members[i]._id, {$pull: {'profile.collaborations': {'_id': proj._id}}});

    Projects.remove(options._id);
  }
});
