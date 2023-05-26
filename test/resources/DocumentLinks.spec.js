'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

describe('Documents Links', function () {
  describe('list', function () {
    it('Sends the correct request', function () {
      return telnyx.documentLinks.list().then(function (response) {
        expect(response.data).to.have.property('data');
        expect(response.data).to.have.property('meta');
      });
    });
  });
});
