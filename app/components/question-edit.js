import Ember from 'ember';

export default Ember.Component.extend({
  showEditForm: false,
  actions: {
    showEditForm(){
      this.set('showEditForm', true);
    },
    update(question){
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.sendAction('update', question, params);
      this.set('showEditForm', false);

      this.set('content', "");
      this.set('author', "");
      this.set('notes', "");
    }

  }

});
