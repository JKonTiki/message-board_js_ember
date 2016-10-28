import Ember from 'ember';

export default Ember.Route.extend({

  actions:{
    update(question, params){
      Object.keys(params).forEach(function(key) {
              if(params[key]!==undefined) {
                question.set(key,params[key]);
              }
            });
            question.save();
      this.transitionTo('index');
    },
    destroyQuestion(){
      alert("this feature is coming soon, thank you for your patience.")
    }
  }

});
