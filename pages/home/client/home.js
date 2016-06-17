Template.home.events({
  "click .js-submitList": function(event){
    console.log("BUTTON CLICKED");
    //read in the values of the input fields and store
    const name = $(".js-name").val();
    const items = $(".js-items").val();
    const list =
    {name:name,items:items}
    console.dir(list);
    Lists.insert(list);
    $(".js-name").val("");
    $(".js-items").val("");
    console.log("SUCCESS");
    
  }
})
