Template.settings.helpers({

  settingsData: function(){
    console.log(Settings.findOne({user:Meteor.userId()}));
    return Settings.findOne({user:Meteor.userId()});
  },
})

Template.settings.onCreated(function(){
  this.state = new ReactiveDict();
  this.state.setDefault({

  });
});



Template.settings.events({
  "click .js-submit-settings": function(event){
    //read in the values of the input fields and store
    event.preventDefault();
    const greeting = $(".js-settings").val();
    const setting = {
      user: Meteor.userId(),
      greeting: greeting
    };

    Meteor.call("submitSettings", setting);
    $(".js-settings").val("");
    console.dir(setting);
    console.log("SUCCESS");
    if((Settings.findOne({user: Meteor.userId()}))==null){//if no greeting associated with current user Id
      Meteor.call("insertSetting",setting);
    }else{
      Meteor.call("updateSetting",setting);
    }
  },

})
