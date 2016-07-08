Template.quiz4.helpers({
  bioData: function(){
    return Bios.find({}, {sort: {date_created: 1}})
  },

})
Template.quiz4.events({
"click .js-submit-bio": function(event){
  console.log("BUTTON CLICKED");
  //read in the values of the input fields and store
  const name = $(".js-name").val();
  const bio = $(".js-bio").val();
  const profile = {
    name:name,
    bio:bio,
  };
  console.dir(profile);
  Meteor.call("submitBio", profile);
  $(".js-name").val("");
  $(".js-bio").val("");
  console.log("SUCCESS");
  },
})
