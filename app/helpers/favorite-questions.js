import Ember from 'ember';

export function favoriteQuestions(_isInFavorites) {
  if (_isInFavorites[0] === true) {
    return Ember.String.htmlSafe('★');
  } else{
    return Ember.String.htmlSafe('☆');
  }
}
export default Ember.Helper.helper(favoriteQuestions);
