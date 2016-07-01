Meteor.methods({
  "submitSettings": function(greeting){
    if((Settings.findOne({user:Meteor.userId()}))==null){
        Settings.insert(greeting);

      }else{
        Settings.update({_id:Settings.findOne({user:Meteor.userId()})._id},
            {
             $set:{greeting:setting.greeting},
           });      }
  // Settings.insert(greeting);
  },

})
