import Ember from 'ember';

export default Ember.Helper.extend({
  study: Ember.inject.service('study'),

  onAssignmentChange: Ember.observer('study.tests.[]', function assignment() {
    this.recompute();
  }),

  compute(params, hash) {
    return true;
  }
});
