Meteor.methods({
  "removeList": function(id){
    Lists.remove(id);
    console.log("removed comment" +id);
  },

})
