Meteor.publish("theComments",
  function(){return Comments.find();})

Meteor.publish("theLists",
  function(){return Lists.find();})

Meteor.publish("theSettings",
  function(){return Settings.find();})

Meteor.publish("userData", function () {
  if (this.userId) {  //only if you log in you can see it
	  //return Meteor.users.find({}); // everyone sees everything
                             //{fields: {'profile': 1, 'things': 1}});

  return Meteor.users.find({_id: this.userId},
          {fields:{profile:1, "services.google.email":1}});
  } else {
    this.ready();
  }
});

Meteor.publish("theBios",
  function(){return Bios.find();})
