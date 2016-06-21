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

Template.home.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    color: "bg-info",
    counter: 0,
  });
  console.log("creating the template");
  console.dir(this.state);
});

Template.home.helpers({
  theColor: function(){
    const instance = Template.instance();
    return instance.state.get("color");
  },
  theCounter: function(){
    const instance = Template.instance();
    return instance.state.get("counter");
  },
})
