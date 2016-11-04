import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  incompleteForm: false,
  actions:{

    addNewAnswer(){
    this.set('addNewAnswer', true);
  },
    saveAnswer(){
      var params = {
        content: this.get('content') ? this.get('content') : "",
        author: this.get('author') ? this.get('author') : "",
        question: this.get('question')
      };
      if (params.content === "" || params.author === "") {
        this.set('incompleteForm', true);
      } else{
        this.sendAction('saveAnswer', params);
        this.set('addNewAnswer', false);
        this.set('incompleteForm', false);
        this.set('content', "");
        this.set('author', "");
      }
    },

    cancelAnswer(){
      this.set('addNewAnswer', false);
      this.set('content', "");
      this.set('author', "");
    }

  }

});
