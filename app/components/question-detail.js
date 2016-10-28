import Ember from 'ember';

export default Ember.Component.extend({

  delete(question){
    if(confirm("Are you s-s-shh-shhh-SUUUREUEREE!?!?!?!?!")){
      this.sendAction('destroyQuestion', question)
    }
  }

});
