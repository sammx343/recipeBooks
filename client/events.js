Template.recipe.events({
  'click .toggle-menu' : function(){
    Meteor.call('toggleMenuItem', this._id, this.inMenu);
  },

  'click .fa-trash' : function(){
    Meteor.call('deleteRecipe', this._id);
  },

  'click .fa-pencil' : function(event, template){
    template.editMode.set(!template.editMode.get());
  }
});

Template.newRecipe.events({
  'click .fa-close' : function(){
    Session.set('newRecipe', false);
  }
});

Template.recipes.events({
  'click .new-recipe' : () => {
    Session.set('newRecipe', true);
  }
});