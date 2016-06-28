Template.showLists.helpers({
  listData: function(){
    return Lists.find({}, {sort: {date_created: 1}})
  },

})

Template.showLists.events({
  "click .js-find-list": function(event){
    console.log("clicked search button")
    //read in the values of the input fields and store
    const list = $(".js-list").val();
    // Meteor.find("findList", this.listsData, list);
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
     console.dir(this);
     //test for insecure package
    //  Lists.remove(this.list._id);
     Meteor.call("removeList", this.list.createdBy, this.list._id);

  },
  "click .js-edit-list":
  function(event){
    console.log("editing list");
    const id = this.list._id;
    window.location.replace("/showLists/" + id);
  },
  "click .js-complete-list":
  function(event){
    console.log("completed list, going to archive");

  }
})
