import Ember from 'ember';

export default Ember.Service.extend({

  favorites: [],

  contains(question){
    var favoritesList = this.get('favorites');
    var isInFavorites = false;

    for (var i = 0; i < favoritesList.length; i++) {
      if (favoritesList[i] === question) {
        isInFavorites = true;
      }
    }
    if (isInFavorites === true) {
      return true;
    } else{
      return false;
    }
  },

  add(question){
    this.get('favorites').pushObject(question);
  },

  remove(question){
    this.get('favorites').removeObject(question);
  }

});
