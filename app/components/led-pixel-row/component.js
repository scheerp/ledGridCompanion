import Component from 'ember';

let component = Ember.Component.extend({
  heigth: null,
  width: null,
  activeColor: null,

  verticalPixels: Ember.computed('heigth', function() {
    let verticalPixels = [];

    for (let i = 1; i <= this.get('heigth'); i++) {
      verticalPixels.push(i);
    }

    return verticalPixels;
  })
});

export default component;
