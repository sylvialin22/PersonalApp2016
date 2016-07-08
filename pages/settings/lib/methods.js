Meteor.methods({

  insertSetting:function(setting){
     Settings.insert(setting);
   },
   updateSetting:function(setting){
     Settings.update({_id:Settings.findOne({user:Meteor.userId()})._id},
      {
       $set:{greeting: setting.greeting},
     });
   },
})
