'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: '/{id}/actions/refresh',
  includeBasic: ['create'],
});
