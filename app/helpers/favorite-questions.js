import Ember from 'ember';

export function favoriteQuestions(favoritesList, question) {
  var isInFavorites = false;
  for (var i = 0; i < favoritesList.length; i++) {
    if (favoritesList[i] === question) {
      isInFavorites = true;
    }
  }
  if (isInFavorites === true) {
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
