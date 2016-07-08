Template.comments.helpers({
	commentsdata: function(){
		return Comments.find({},{sort:{createdAt:1}});
	},
		theColor: function(){
	    const instance = Template.instance();
	    return instance.state.get("color");
	  },
	  theCounter: function(){
	    const instance = Template.instance();
	    return instance.state.get("counter");
	  },
})
Template.home.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    color: "bg-info",
  });
  console.log("creating the template");
  console.dir(this.state);
});

Template.comments.events({
	"click .js-submit-comment": function(event){
	   event.preventDefault();
	   //console.dir(event);
	   const comment_text = $(".js-user-comment").val();
     if(comment_text==""){
       window.alert("You must enter a comment!");
       return;
     }
     const comment_rating = $(".js-rating-comment").val();
	   const comment_obj =
	   {text: comment_text,
       rating: comment_rating,
	    createdAt: new Date(),
	    createdBy: Meteor.userId(),
	    // userEmail: Meteor.user().emails[0].address
			userEmail: ("services.google.email"),
		};
	    console.dir(comment_obj);
			// Comments.insert(comment_obj);  <-- test for insecure package -->
			Meteor.call("submitComment", comment_obj);
      //insert obj in comments table locally on
      //client, send to server, server will update
      //collection, and update everyone's collections
	    $(".js-user-comment").val("");
      //Router.go('/');
      console.log("SUCCESS");
	},
	"change .js-color-comment": function(event, instance){
		console.log($(".js-color").val());
		//change the color field of the state object...
		const c = instance.$(".js-color").val(); //local instance query
		return instance.state.set('color', c);
	},
});

Template.commentRow.events({
  "click .js-delete-comment":
	 function(event){
     console.log("removing...");
		 console.dir(this);
		 //test for insecure package
		//  Comments.remove(this.comment._id);
		Meteor.call("removeComment", this.comment.createdBy, this.comment._id);
  },
})
