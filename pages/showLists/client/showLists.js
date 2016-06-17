Template.showLists.helpers({
  listData: function(){
    return Lists.find({}, {sort: {date_created: 1}})
  }
})

Template.showLists.events({
  "click .js-find-list": function(event){
    console.log("clicked search button")
    //read in the values of the input fields and store
    const list = $(".js-list").val();
    console.dir(list);
    $(".js-find-list").val("");
  }
})

// Template.listRow.helpers({
// 	visibility: function(){
// 		if (Session.get("showCompleted")) {
// 			   return "visible";
// 		   } else {
// 		   	   return "hidden";
// 		   }
// 	},


Template.listRow.events({
  "click .js-delete-list":
	 function(event){
     console.log("clicked remove X")
    Lists.remove(this.list._id);
  },
  "click .js-edit-list":
  function(event){
    console.log("editing list");
  },
  "click .js-complete-list":
  function(event){
    console.log("completed list, going to archive");

  }
})
