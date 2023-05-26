'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('numberPortoutsSupportingDocuments', function () {
  describe('list', function () {
    function responseFn(response) {
      expect(response).to.have.property();
    }

    it('Sends the correct request', function () {
      return telnyx.rooms
        .list({
          filter: {
            date_created_at: {
              eq: '2021-04-25',
              gte: '2021-04-25',
              lte: '2021-04-25',
            },
            date_updated_at: {
              eq: '2021-04-25',
              gte: '2021-04-25',
              lte: '2021-04-25',
            },
            unique_name: 'my_video_room',
          },
          include_sessions: 'true',
          page: {
            size: '20',
            number: '1',
          },
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.rooms
        .list(
          {
            filter: {
              date_created_at: {
                eq: '2021-04-25',
                gte: '2021-04-25',
                lte: '2021-04-25',
              },
              date_updated_at: {
                eq: '2021-04-25',
                gte: '2021-04-25',
                lte: '2021-04-25',
              },
              unique_name: 'my_video_room',
            },
            include_sessions: 'true',
            page: {
              size: '20',
              number: '1',
            },
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('create', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.rooms
        .create({
          enable_recording: true,
          max_participants: 10,
          unique_name: 'My room',
          webhook_event_failover_url: 'https://failover.example.com',
          webhook_event_url: 'https://example.com',
          webhook_timeout_secs: 25,
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.rooms
        .create(
          {
            enable_recording: true,
            max_participants: 10,
            unique_name: 'My room',
            webhook_event_failover_url: 'https://failover.example.com',
            webhook_event_url: 'https://example.com',
            webhook_timeout_secs: 25,
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('del', function () {
    function responseFn(response) {
      expect(response).to.have.property();
    }

    it('Sends the correct request', function () {
      return telnyx.rooms
        .del({
          room_id: utils.getTestRoomId(),
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.rooms
        .del(
          {
            room_id: utils.getTestRoomId(),
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('retrieve', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.rooms
        .retrieve({
          room_id: utils.getTestRoomId(),
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.rooms
        .retrieve(
          {
            room_id: utils.getTestRoomId(),
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('update', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.rooms
        .update({
          room_id: utils.getTestRoomId(),
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.rooms
        .update(
          {
            room_id: utils.getTestRoomId(),
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('update', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.rooms
        .update({
          room_id: utils.getTestRoomId(),
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.rooms
        .update(
          {
            room_id: utils.getTestRoomId(),
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
});
