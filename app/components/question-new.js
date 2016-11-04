import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  incompleteForm: false,
  actions:{

    addNewQuestion(){
    this.set('addNewQuestion', true);
  },

    saveQuestion(){
      var params = {
        content: this.get('content') ? this.get('content') : "",
        author: this.get('author') ? this.get('author') : "",
        notes: this.get('notes') ? this.get('notes') : ""
      };
      if (params.content === "" || params.author === "" || params.notes === "") {
        this.set('incompleteForm', true);
      } else{
        this.sendAction('saveQuestion', params);
        this.set('addNewQuestion', false);
        this.set('incompleteForm', false);
        this.set('content', "");
        this.set('author', "");
        this.set('notes', "");
      }
    },

    cancelQuestion(){
      this.set('addNewQuestion', false);
      this.set('content', "");
      this.set('author', "");
      this.set('notes', "");
    }



  }

});
