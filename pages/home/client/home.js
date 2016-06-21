Template.home.events({
  "click .js-submitList": function(event){
    console.log("BUTTON CLICKED");
    //read in the values of the input fields and store
    const name = $(".js-name").val();
    const items = $(".js-items").val();
    const list = {name:name,items:items};
    console.dir(list);
    Lists.insert(list);
    $(".js-name").val("");
    $(".js-items").val("");
    console.log("SUCCESS");
  },
  "change .js-color": function(event, instance){
    console.log($(".js-color").val());
    //change the color field of the state object...
    const c = instance.$(".js-color").val(); //local instance query
    return instance.state.set('color', c);
  },

  "click .js-counter": function(event, instance){
    console.log("PUSHED");
    const c = instance.state.get("counter"); //local instance query
    return instance.state.set('counter', c + 1);
  },

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