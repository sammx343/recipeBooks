Meteor.publish('recipes', function(){
  return Recipes.find({ author: this.userId})
});

Meteor.publish("directory", function () {
  return Meteor.users.find({});
});