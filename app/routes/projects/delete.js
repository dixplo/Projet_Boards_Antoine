import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    return this.get('store').peekRecord('project', params.project_id);
  },
  actions : {
    supprimer(project) {
      project.deleteRecord();
      project.save();
      this.transitionTo('projects');
    },
    retour() {
      this.transitionTo('projects');
    }
  }
});
