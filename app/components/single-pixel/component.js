import Ember from 'ember';
import computed from 'ember-computed';

export default Ember.Component.extend({
  colorStyle: null,
  activeColor: null,

  computedColor: Ember.computed('colorStyle', function() {
    return null;
  }),

  actions: {
    changeColor(){
      this.set('colorStyle', this.get('activeColor'));
    }
  }
});
