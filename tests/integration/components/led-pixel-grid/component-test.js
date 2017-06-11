import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('led-pixel-grid', 'Integration | Component | led pixel grid', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{led-pixel-grid}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#led-pixel-grid}}
      template block text
    {{/led-pixel-grid}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
