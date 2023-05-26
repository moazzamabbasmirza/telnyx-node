'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Verified Calls Display Profiles', function () {
  describe('create', function () {
    function responseFn(response) {
      expect(response).to.have();
    }

    it('Sends the correct request', function () {
      return telnyx.verifiedCallsDisplayProfiles.create().then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.verifiedCallsDisplayProfiles
        .create(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
