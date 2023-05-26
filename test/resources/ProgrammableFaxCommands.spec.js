'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('programmableFaxCommands', function () {
  describe('create', function () {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
    }

    it('Sends the correct request', function () {
      return telnyx.programmableFaxCommands.create('123').then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.programmableFaxCommands
        .create('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
