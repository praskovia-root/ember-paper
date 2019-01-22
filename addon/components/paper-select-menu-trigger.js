import { computed } from '@ember/object';
import BasicTrigger from 'ember-basic-dropdown/components/basic-dropdown/trigger';

export default BasicTrigger.extend({
  tagName: 'md-select',
  attributeBindings: ['disabledAttr:disabled', 'required', 'ariaHaspopup:aria-haspopup', 'ariaLabelledBy:aria-labelledby'],
  disabledAttr: computed('disabled', function() {
    return this.get('disabled') ? 'disabled' : null;
  }),
  ariaHaspopup: 'listbox'
});
