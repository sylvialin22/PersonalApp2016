Meteor.methods({
  "submitInfo": function(userProfile){
    UserProfiles.insert(userProfile);
    console.log("saved to collection");
    console.log(userProfile);
  },
})
