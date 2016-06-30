Template.myProfile.events({
  "click .js-submit-info": function(event){
    //read in the values of the input fields and store
    const first = $(".js-firstName").val();
    const last = $(".js-lastName").val();
    const nick = $(".js-nickname").val();
    const email = $(".js-email").val();
    const birth = $(".js-birthyear").val();
    const userProfile = {
      createdBy: Meteor.userId(),
      firstName: first,
      lastName:last,
      nickname:nick,
      emailAddress:email,
      birthyear:birth,
    };
    console.dir(userProfile);
    Meteor.call("submitInfo", userProfile);
    $(".js-firstName").val("");
    $(".js-lastName").val("");
    $(".js-nickname").val("");
    $(".js-email").val("");
    $(".js-birthyear").val("");
    console.log("SUCCESS");
  },
})

Template.myProfile.helpers({

  userData: function(){
    return UserProfiles.find({createdBy: Meteor.userId()})
  },
})
