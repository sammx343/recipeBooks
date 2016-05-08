Template.recipe.onCreated(function(){
  this.editMode = new ReactiveVar(false);
});

Template.recipes.helpers({
  recipes: () => {
    return Recipes.find({});
  }
});

Template.recipe.helpers({
  updateRecipeId: function(){
    return this._id;
  },

  editMode: function(){
    return Template.instance().editMode.get();
  }
});

Template.recipeSingle.helpers({
  recipes: () => {
    var id = FlowRouter.getParam('id');
    return Recipes.findOne({_id : id});
  }
});

Template.menu.helpers({
  recipes: () => {
    return Recipes.find({inMenu: true});
  }
});

Template.shoppingList.helpers({
  shoppingList: () => {
    return Recipes.find({inMenu: true});
  }
});

