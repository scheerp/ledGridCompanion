import Ember from 'ember';

export default Ember.Component.extend({
  color: null,
  activeColor: null,

  actions: {
    changeColor(){
      this.set('color', this.get('activeColor'));
    }
  }
});
