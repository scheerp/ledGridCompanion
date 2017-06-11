import Component from 'ember';

let component = Ember.Component.extend({
  width: null,
  activeColor: null,

  horizontalPixels: Ember.computed('width', function() {
    let horizontalPixels = [];

    for (let i = 1; i <= this.get('width'); i++) {
      horizontalPixels.push(i);
    }

    return horizontalPixels;
  }),
});

export default component;
