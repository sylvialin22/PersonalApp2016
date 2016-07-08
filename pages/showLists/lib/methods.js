Meteor.methods({
  "removeList": function(id, list){
    if(id == Meteor.userId()){
      Lists.remove(list);
      console.log("removed comment" + list);
    }
    else{
      console.log("this is not your list");
    }
  },
})
