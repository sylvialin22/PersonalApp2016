Router.configure({
  layoutTemplate: 'layout',
});
Router.route('/',{name:"home"});
Router.route('about');
Router.route('comments');
Router.route('showLists');
Router.route('contact');
Router.route('archive');
Router.route('/showLists/:_id',
    {name:"selectedList",
      data: function(){
      const c = Lists.findOne({_id:this.params._id})
      console.dir(c);
      return c;
      }
    }
);
Router.route('settings');
Router.route('login');
Router.route('quiz4');
Router.route('/showBios/:_id',
    {name:"selectedBio",
      data: function(){
      const c = Bios.findOne({_id:this.params._id})
      console.dir(c);
      return c;
      }
    }
);
