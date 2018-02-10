Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('../models1/events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventsController = function () {
  function EventsController() {
    _classCallCheck(this, EventsController);
  }

  _createClass(EventsController, null, [{
    key: 'getAllEvents',

    /**
     *
     * Get all events
     * @param {any} req
     * @param {any} res
     * @returns {json} gets all events
     * @memberof events
     */
    value: function () {
      function getAllEvents(req, res) {
        return res.status(200).json({
          events: _events2['default']
        });
      }

      return getAllEvents;
    }()

    /**
     *
     * Get an Event
     * @param {any} req
     * @param {any} res
     * @returns {json} gets an event
     * @memberof events
     */

  }, {
    key: 'getEvent',
    value: function () {
      function getEvent(req, res) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _events2['default'][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var event = _step.value;

            if (event.id === parseInt(req.params.eventId, 10)) {
              return res.status(200).json({
                event: event
              });
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return res.status(404).json({
          message: 'Event not found'
        });
      }

      return getEvent;
    }()

    /**
     *
     * Create Event
     * @param {any} req
     * @param {any} res
     * @returns {json} create event
     * @memberof events
     */

  }, {
    key: 'createEvent',
    value: function () {
      function createEvent(req, res) {
        if (req.body.name && req.body.startDate && req.body.endDate && req.body.time && req.body.description && req.body.center) {
          // create new event details from req.body
          req.body.id = _events2['default'].length + 1;
          _events2['default'].push(req.body);

          return res.status(201).json({
            message: 'Event created successfully'
          });
        }
        return res.status(400).json({
          message: 'Please fill in all required fields'
        });
      }

      return createEvent;
    }()

    /**
     *
     * Update Event
     * @param {any} req
     * @param {any} res
     * @returns {json}update a center
     * @memberof events
     */

  }, {
    key: 'updateEvent',
    value: function () {
      function updateEvent(req, res) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = _events2['default'][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var event = _step2.value;

            if (event.id === parseInt(req.params.eventId, 10)) {
              event.name = req.body.name || event.name;
              event.startDate = req.body.startDate || event.startDate;
              event.endDate = req.body.endDate || event.endDate;
              event.time = req.body.time || event.time;
              event.center = req.body.center || event.center;
              event.description = req.body.description || event.description;
            }
            return res.status(201).json({
              message: 'Event updated successfully',
              event: event
            });
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
              _iterator2['return']();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return res.status(404).json({
          message: 'Event not found'
        });
      }

      return updateEvent;
    }()

    /**
     *
     * Delete Event
     * @param {any} req
     * @param {any} res
     * @returns {json}delete an event
     * @memberof events
     */

  }, {
    key: 'deleteEvent',
    value: function () {
      function deleteEvent(req, res) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _events2['default'][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var event = _step3.value;

            if (event.id === parseInt(req.params.eventId, 10)) {
              _events2['default'].splice(event, 1);
            }
            return res.status(202).json({
              message: "Event deleted successfully"
            });
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3['return']) {
              _iterator3['return']();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        return res.status(400).json({
          message: "Event not found"
        });
      }

      return deleteEvent;
    }()
  }]);

  return EventsController;
}();

exports['default'] = EventsController;