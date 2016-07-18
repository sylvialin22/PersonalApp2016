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
  "updateList": function(listID,newItem){
    // Lists.update({$push:{items: newItem}});
    Lists.update({id: listID},{$push: {items:newItem}});
    console.log(listID);
    console.log("added item");


  }
})
