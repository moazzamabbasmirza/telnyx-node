'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Whatsapp Contacts', function () {
  describe('create', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.whatsappContacts
        .create({
          contacts: [
            '15125551000',
            '+1 512 555 1001',
            '5125551002',
            '+1 (512) 555-1004',
            '1-512-555-1005',
          ],
          whatsapp_user_id: '15125551212',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.whatsappContacts
        .create(
          {
            contacts: [
              '15125551000',
              '+1 512 555 1001',
              '5125551002',
              '+1 (512) 555-1004',
              '1-512-555-1005',
            ],
            whatsapp_user_id: '15125551212',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
});
