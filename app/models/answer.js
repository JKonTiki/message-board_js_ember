import DS from 'ember-data';

export default DS.Model.extend({
  content_answer: DS.attr(),
  author_answer: DS.attr(),
  question: DS.belongsTo('question', { async: true })
});
