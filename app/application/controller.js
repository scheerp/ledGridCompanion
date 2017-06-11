import Ember from 'ember';
import computed from 'ember-computed';

export default Ember.Controller.extend({
  activeColor: 'rgb(0,0,0)',
  computedColor: Ember.computed('activeColor', function() {
    return Ember.String.htmlSafe('background-color: ' + this.get('activeColor'))
  })

});
