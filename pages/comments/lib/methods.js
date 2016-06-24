Meteor.methods({
  "removeComment": function(id){
    Comments.remove(id);
    console.log("removed comment" +id);
  },
  "submitComment": function(comment_obj){
    Comments.insert(comment_obj);
  }

})
