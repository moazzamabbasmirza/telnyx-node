'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('numberPortouts', function () {
  describe('list', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      expect(response).to.have.property('meta');
    }

    it('Sends the correct request', function () {
      return telnyx.numberPortouts
        .list({
          filter: {
            carrier_name: 'string',
            spid: 'string',
            status: 'string',
          },
          page: {
            number: 'integer >= 1',
            size: 'integer [ 1 .. 250 ]',
          },
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.numberPortouts
        .list(
          {
            filter: {
              carrier_name: 'string',
              spid: 'string',
              status: 'string',
            },
            page: {
              number: 'integer >= 1',
              size: 'integer [ 1 .. 250 ]',
            },
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });

  describe('Document Id', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }
    it('Sends the correct request', function () {
      return telnyx.numberPortouts.retrieve(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.numberPortouts
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('Download Document', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      expect(response.data).to.have.property('body');
      expect(response.data).to.have.property('created_at');
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('user_id');
    }
    it('Sends the correct request', function () {
      return telnyx.numberPortouts.retrieveComments(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.numberPortouts
        .retrieveComments(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('create', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }
    it('Sends the correct request', function () {
      return telnyx.numberPortouts.create(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.numberPortouts
        .create(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('listSupportingDocuments', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      expect(response.data[0]).to.have.property('created_at');
      expect(response.data[0]).to.have.property('document_id');
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('portout_id');
      expect(response.data[0]).to.have.property('record_type');
      expect(response.data[0]).to.have.property('type');
      expect(response.data[0]).to.have.property('updated_at');
    }
    it('Sends the correct request', function () {
      return telnyx.numberPortouts
        .listSupportingDocuments(TEST_UUID)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.numberPortouts
        .listSupportingDocuments(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('createListOfSupportingDocuments', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }
    it('Sends the correct request', function () {
      return telnyx.numberPortouts
        .createListOfSupportingDocuments(TEST_UUID)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.numberPortouts
        .createListOfSupportingDocuments(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('updateStatus', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }
    it('Sends the correct request', function () {
      return telnyx.numberPortouts
        .updateStatus({
          TEST_UUID,
          status: 'status',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.numberPortouts
        .updateStatus(
          {
            TEST_UUID,
            status: 'status',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
});
