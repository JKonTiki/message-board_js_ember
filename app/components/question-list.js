import Ember from 'ember';

export default Ember.Component.extend({

  questionsExist: Ember.computed('questions', 'questionAdded', function(){
    console.log(this.get('questionAdded'));
    console.log(this.get('questions'));
    if ((this.get('questions').content.length > 0) || this.get('questionAdded')) {
      return true;
    } else {
      return false;
    }
  }),

  questionAdded: false,

  actions: {
    saveQuestion(params){
      this.sendAction('saveQuestion', params);
      this.set('questionAdded', true);
    }
  }

});
