import Ember from 'ember';
import moment from 'moment';

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
        notes: this.get('notes') ? this.get('notes') : "",
        timePosted: moment().format('[asked] h:mm a[], MM/DD/YY')
      };
      if (params.content === "" || params.author === "") {
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
