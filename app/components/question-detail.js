import Ember from 'ember';

export default Ember.Component.extend({
  favorite: false,
  sortBy: ['score_answer:desc'],
  rankedAnswers: Ember.computed.sort('question.answers', 'sortBy'),
  actions:{

    delete(question){
      if(confirm("Are you sure?")){
        this.sendAction('destroyQuestion', question);
      }
    },

    upvote(answer){
      this.sendAction('upvote', answer);
    },

    downvote(answer){
      this.sendAction('downvote', answer);
    }

  }
});
