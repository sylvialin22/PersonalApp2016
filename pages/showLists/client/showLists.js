Template.showLists.helpers({
  lists: function(){
    return Lists.find({name:"Movies"});
  }
})

Template.showLists.events({
  "click .js-submitList": function(event){
    console.log("BUTTON CLICKED");
    //read in the values of the input fields and store
    const name = $(".js-name").val();
    const item = $(".js-item").val();
    const list =
    {name:name,item:item}
    console.dir(list);
  }
})
