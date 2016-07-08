Meteor.methods({
  "submitList": function(list){
    if((Lists.findOne({user:Meteor.userId()}))==null){
        Lists.insert(list);

      }else{
        Lists.update({_id:Lists.findOne({user:Meteor.userId()})._id},
            {
             $set:{list:list.greeting},
           });      }
  // Settings.insert(greeting);
  },
})
