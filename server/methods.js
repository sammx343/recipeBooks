Meteor.methods({
  toggleMenuItem: function(id, currentState){
    Recipes.update(id, {
      $set: {
        inMenu: !currentState
      }
    });
  },

  deleteRecipe: function(id){
    Recipes.remove(id);
  }
});