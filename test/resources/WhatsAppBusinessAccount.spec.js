'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Whatsapp Business Account', function () {
  describe('list', function () {
    function responseFn(response) {
      expect(response).to.have('data');
    }

    it('Sends the correct request', function () {
      return telnyx.whatsAppBusinessAccount
        .list({
          page: {
            number: '1',
            size: '20',
          },
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.whatsAppBusinessAccount
        .list(
          {
            page: {
              number: '1',
              size: '20',
            },
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('retrieveWhatsAppBusinessAccount', function () {
    function responseFn(response) {
      expect(response).to.have('data');
    }

    it('Sends the correct request', function () {
      return telnyx.whatsAppBusinessAccount
        .retrieveWhatsAppBusinessAccount({
          id: '2ade33a-21c0-473b-b055-b3c836e1c292',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.whatsAppBusinessAccount
        .retrieveWhatsAppBusinessAccount(
          {
            id: '2ade33a-21c0-473b-b055-b3c836e1c292',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('retrieveWhatsAppBusinessAccountPhoneNumbers', function () {
    function responseFn(response) {
      expect(response).to.have('data');
    }

    it('Sends the correct request', function () {
      return telnyx.whatsAppBusinessAccount
        .retrieveWhatsAppBusinessAccountPhoneNumbers({
          id: '2ade33a-21c0-473b-b055-b3c836e1c292',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.whatsAppBusinessAccount
        .retrieveWhatsAppBusinessAccountPhoneNumbers(
          {
            id: '2ade33a-21c0-473b-b055-b3c836e1c292',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
});
