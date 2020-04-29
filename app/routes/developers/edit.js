import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    return this.get('store').peekRecord('developer', params.developer_id);
  },
  actions: {
    modifier(developer) {
      developer.save().then(()=>this.transitionTo('developers'));
    },
    retour() {
      this.transitionTo('developers');
    }
  }
});
