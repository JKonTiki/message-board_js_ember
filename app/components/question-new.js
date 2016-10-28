import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
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
      this.sendAction('saveQuestion', params);
      this.set('addNewQuestion', false);
    }



  }

});
