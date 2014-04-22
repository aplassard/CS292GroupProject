Projects = new Meteor.Collection("projects");

Projects.allow({
  insert: function(userId, doc) {
            return (userId && doc.owners.length === 1 && doc.owners[0]._id === userId);
          },
  update: function(userId, doc) {
            return (userId && !doc.owners.every(function(elem) {
              if (userId === elem.ownerId) {
                return false;
              }
            }));
          },
  remove: function(userId, doc) {
            return (userId && !doc.owners.every(function(elem) {
              if (userId === elem.ownerId) {
                return false;
              }
            }));
          }
});
///////////////////////////////////////////////////////////////////////////////
// Projects

/*
  Each project is represented by a document in the Projects collection:
  	name: String
  	description: String
  	owners: user ids of project admins
  	members: user ids of project members
    keywords: array of all skills used in the project
    needs: array of skills the project is currently looking for
*/


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
      description: options.description,
      members: options.members ? options.members : [],
      keywords: options.keywords,
      needs: options.needs ? options.needs : []
    });
    return id;
  },

  invite: function (partyId, userId) {
    check(partyId, String);
    check(userId, String);
    var party = Parties.findOne(partyId);
    if (! party || party.owner !== this.userId)
      throw new Meteor.Error(404, "No such party");
    if (party.public)
      throw new Meteor.Error(400,
                             "That party is public. No need to invite people.");
    if (userId !== party.owner && ! _.contains(party.invited, userId)) {
      Parties.update(partyId, { $addToSet: { invited: userId } });

      var from = contactEmail(Meteor.users.findOne(this.userId));
      var to = contactEmail(Meteor.users.findOne(userId));
      if (Meteor.isServer && to) {
        // This code only runs on the server. If you didn't want clients
        // to be able to see it, you could move it to a separate file.
        Email.send({
          from: "noreply@example.com",
          to: to,
          replyTo: from || undefined,
          subject: "PARTY: " + party.title,
          text:
"Hey, I just invited you to '" + party.title + "' on All Tomorrow's Parties." +
"\n\nCome check it out: " + Meteor.absoluteUrl() + "\n"
        });
      }
    }
  },
  
  deleteProject: function(otherId, myId) {
    /*if (!this.isSimulation) {
      console.log("my " + myId + " other " + otherId);
      check(otherId, String);
      check(myId, String);
      if (this.userId === myId) {
        var me = Meteor.users.findOne(myId);
        var him = Meteor.users.findOne(otherId);
        check(me, Object);
        check(him, Object);
        if (areContacts(me.profile.contacts, him._id)) {
          Meteor.users.update(otherId, {$pull: {'profile.contacts': {_id: myId, name: me.profile.name}}});
          Meteor.users.update(myId, {$pull: {'profile.contacts': {_id: otherId, name: him.profile.name}}});
        } else {
          throw new Meteor.Error(500, "Update Failed", "Could not remove contact")
        }
      }
    }*/
  },

  addMember: function(requestId) {
      /*check(requestId, String);
      var request = Notifications.findOne(requestId);
      var error = false;
      if (request && request.to === this.userId) {
        var me = Meteor.users.findOne(request.to);
        var him = Meteor.users.findOne(request.from);
        if (me && him) {
          Meteor.users.update(me._id, {$push: {'profile.contacts': {_id: him._id, name: him.profile.name}}});
          Meteor.users.update(him._id, {$push: {'profile.contacts': {_id: me._id, name: me.profile.name}}}); 
          Meteor.users.update(him._id, {$pull: {'profile.pendingContacts': me._id}});
          Notifications.remove(requestId);
        } else {
          error = true;
        }
      } else {
        error = true;
      }
      if (error) {
        throw new Meteor.error(500, "Update Failed", "Could not add contact")
      }*/
  }
});
