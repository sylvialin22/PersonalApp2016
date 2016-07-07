Template.settings.helpers({

  settingsData: function(){
    return Settings.findOne();
  },
})

Template.settings.events({
  "click .js-submit-settings": function(event){
    //read in the values of the input fields and store
    event.preventDefault();

    const greeting = $(".js-settings").val();
    const setting = {
      greeting: greeting,
      user: Meteor.userId(),
    };
    Meteor.call("submitSettings", setting);
    $(".js-settings").cdval("");
    console.dir(setting);
    console.log("SUCCESS");
  },

})
