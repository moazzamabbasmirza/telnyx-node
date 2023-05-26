'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('numberPortoutsSupportingDocuments', function () {
  describe('retrieve', function () {
    function responseFn(response) {
      expect(response.data).to.have.property('created_at');
      expect(response.data).to.have.property('document_id');
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('portout_id');
      expect(response.data).to.have.property('record_type');
      expect(response.data).to.have.property('type');
      expect(response.data).to.have.property('updated_at');
    }

    it('Sends the correct request', function () {
      return telnyx.numberPortoutsSupportingDocuments
        .retrieve('123')
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.numberPortoutsSupportingDocuments
        .retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
