import Ember from 'ember';

export default Ember.Route.extend({

  actions:{
    update(question, params){
      Object.keys(params).forEach(function(key) {
              if(params[key]!==undefined && params[key]!=="") {
                question.set(key,params[key]);
              }
              // because only the 'notes' field can be empty:
              if(key==="notes" && params[key]===""){
                question.set(key,params[key]);
              }
            });
            question.save();
      this.transitionTo('question');
    },

    saveAnswer(params){
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('question');
    },

    destroyQuestion(question){
      var answer_deletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },

    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('index');
    },
  }

});
