import Ember from 'ember';

export function favoriteQuestions(_isInFavorites) {
  if (_isInFavorites[0] === true) {
    return Ember.String.htmlSafe('★');
  } else{
    return Ember.String.htmlSafe('☆');
  }

}

export default Ember.Helper.helper(favoriteQuestions);




//
//
// {{#if favorite}}
//   <span class="star star-filled inline" {{action 'favorite'}}>★</span>
// {{else}}
//   <span class="star star-hollow" {{action 'favorite'}}>☆</span>
