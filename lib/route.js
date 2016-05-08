if(Meteor.isClient){
  Accounts.onLogin(function(){
    FlowRouter.go('recipe-book');
  });

  Accounts.onLogout(function(){
    FlowRouter.go('home');
  });
}

FlowRouter.triggers.enter([function(context, redirect){
  if(!Meteor.userId()){
    FlowRouter.go('home');
  }
}]);

FlowRouter.route('/',{
  name: 'home',
  action(){
    if(Meteor.userId()){
      FlowRouter.go('recipe-book');
    }
    GAnalytics.pageview();
    BlazeLayout.render('home');
  }
});

FlowRouter.route('/recipe-book',{
  name: 'recipe-book',
  action(){
    GAnalytics.pageview();
    BlazeLayout.render('main', {main: 'recipes'});
  }
});

FlowRouter.route('/recipe/:id',{
  action(){
    BlazeLayout.render('main', {main: 'recipeSingle'});
  }
});

FlowRouter.route('/menu', {
  name: 'menu',
  action(){
    BlazeLayout.render('main', {main: 'menu'})
  }
});

FlowRouter.route('/shopping-list', {
  name: 'shopping-list',
  action(){
    BlazeLayout.render('main', {main: 'shoppingList'})
  }
});