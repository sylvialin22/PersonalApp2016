Template.profiles.helpers({
  // userData: function(){
  //   return UserProfiles.find({}, {sort: {date_created: -1}})
  // },
  userData: function(){
    return UserProfiles.find({createdBy: Meteor.userId()})
  },
})

Template.profiles.events({

})
