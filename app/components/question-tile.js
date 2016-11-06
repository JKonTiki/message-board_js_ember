import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),
  isInFavorites: Ember.computed('favoritesList', 'question', function(){
    if (this.get('favoritesList').contains(this.get('question'))) {
      return true;
    } else{
      return false;
    }
  }),

  actions: {
    toggleFavorite(question){
      var favoritesList = this.get('favoritesList');

      if(favoritesList.contains(question)){
        this.get('favoritesList').remove(question);
        this.set('isInFavorites', false);
      } else{
        this.get('favoritesList').add(question);
        this.set('isInFavorites', true);
      }
    }
  }
});
