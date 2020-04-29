import Route from '@ember/routing/route';
import {get, set} from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model(params){
    return RSVP.hash({
        project: this.get('store').peekRecord('project', params.project_id),
        developers: this.get('store').findAll('developer')
    });
  },

  actions: {
    modifier(project){
      project.save().then(()=>this.transitionTo('projects'));
    },
    retour() {
      this.transitionTo('projects');
    }
  }
});
