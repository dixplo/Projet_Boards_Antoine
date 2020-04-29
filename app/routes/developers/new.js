import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findAll('developer');
  },
  actions : {
    nouveau(identity){
      let developer = this.get('store').createRecord('developer',{identity:identity});
      developer.save();
      this.transitionTo('developers');
    },
    retour() {
      this.transitionTo('developers');
    }
  }
});
