import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewAnswer: false,
  incompleteForm: false,
  actions:{

    addNewAnswer(){
    this.set('addNewAnswer', true);
  },
    saveAnswer(){
      var params = {
        content_answer: this.get('content_answer') ? this.get('content_answer') : "",
        author_answer: this.get('author_answer') ? this.get('author_answer') : "",
        timePosted_answer: moment().format('[answered] h:mm a[], MM/DD/YY'),
        score_answer: 0,
        question: this.get('question')
      };
      if (params.content_answer === "" || params.author_answer === "") {
        this.set('incompleteForm', true);
      } else{
        this.sendAction('saveAnswer', params);
        this.set('addNewAnswer', false);
        this.set('incompleteForm', false);
        this.set('content_answer', "");
        this.set('author_answer', "");
      }
    },

    cancelAnswer(){
      this.set('addNewAnswer', false);
      this.set('content_answer', "");
      this.set('author_answer', "");
    }

  }

});
