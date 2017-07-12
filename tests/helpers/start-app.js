import Ember from 'ember';
import Application from "../../src/main";
import config from "../../config/environment";
import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';

registerPowerSelectHelpers();

export default function startApp(attrs) {
  let attributes = Ember.merge({}, config.APP);
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  return Ember.run(() => {
    let application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
    return application;
  });
}
