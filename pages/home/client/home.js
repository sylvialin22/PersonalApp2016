Template.home.events({
  "click .js-submitList": function(event){
    console.log("BUTTON CLICKED");
    //read in the values of the input fields and store
    const list_name = $(".js-name").val();
    const list_items = $(".js-items").val();
    const list = {
      name:list_name,
      items:list_items,
      createdAt: new Date(),
      createdBy: Meteor.userId(),
      userEmail: Meteor.user().emails[0].address
    };
    console.dir(list);
    //test for insecure package
    // Lists.insert(list);
    Meteor.call("submitList", list);
    $(".js-name").val("");
    $(".js-items").val("");
    console.log("SUCCESS");
    // Session.set('showCompleted',true);
  },
  
});
