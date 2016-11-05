import Ember from 'ember';

export default Ember.Component.extend({
  actions:{

    delete(question){
      if(confirm("Are you sure?")){
        this.sendAction('destroyQuestion', question);
      }
    },

  }
});
