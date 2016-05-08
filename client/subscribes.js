//Meteor.subscribe('recipes');
Meteor.subscribe("directory");

Template.menu.onCreated(function(){
  subscription(this);
});

Template.shoppingList.onCreated(function(){
  subscription(this);
});

Template.recipes.onCreated(function(){
  subscription(this);
});

Template.recipeSingle.onCreated(function(){
  subscription(this);
});


var subscription = function(param){
  var self = param;
  self.autorun(function(){
    self.subscribe('recipes');
  });
}

//console.log(Meteor.settings.public.ga.account);