import Ember from 'ember';

export default Ember.Component.extend({

  questionAdded: false,

  questionsExist: Ember.computed('questions', 'questionAdded', function(){
    if ((this.get('questions').content.length > 0) || this.get('questionAdded')) {
      return true;
    } else {
      return false;
    }
  }),

  actions: {
    saveQuestion(params){
      this.sendAction('saveQuestion', params);
      this.set('questionAdded', true);
    }
  }

});
