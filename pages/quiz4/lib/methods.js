Meteor.methods({
  "submitBio": function(profile){
    Bios.insert(profile);
  },
})
