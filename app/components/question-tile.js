import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),
  actions: {
    toggleFavorite(question){
      var favoritesList = this.get('favoritesList');

      if(favoritesList.contains(question)){
        this.get('favoritesList').remove(question);
        console.log('remove');
      } else{
        this.get('favoritesList').add(question);
        console.log('add');
      }
    }
  }
});
