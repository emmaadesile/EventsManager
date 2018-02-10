Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _centers = require('../models1/centers');

var _centers2 = _interopRequireDefault(_centers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CentersController = function () {
  function CentersController() {
    _classCallCheck(this, CentersController);
  }

  _createClass(CentersController, null, [{
    key: 'getAllCenters',

    /**
     * Get All Centers
     * @param {obj} req
     * @param {obj} res
     * @returns All the center in db
     * @memberof centerController
     */
    value: function () {
      function getAllCenters(req, res) {
        return res.status(200).json({
          centers: _centers2['default']
        });
      }

      return getAllCenters;
    }()

    /**
     * @static Get a single center
     * @param {obj} req
     * @param {obj} res
     * @returns A single center
     * @memberof centerController
     */

  }, {
    key: 'getCenter',
    value: function () {
      function getCenter(req, res) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _centers2['default'][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var center = _step.value;

            if (center.id === parseInt(req.params.centerId, 10)) {
              return res.status(202).json({
                center: center
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
          message: 'Center not Found'
        });
      }

      return getCenter;
    }()

    /**
     * @static Creates a new center
     * @param {obj} req
     * @param {obj} res
     * @returns Success message with the list of centers
     * @memberof centerController
     */

  }, {
    key: 'createCenter',
    value: function () {
      function createCenter(req, res) {
        if (req.body.name && req.body.capacity && req.body.address && req.body.area && req.body.state && req.body.facilities && req.body.amount && req.body.description) {
          // create new event details from req.body
          req.body.id = _centers2['default'].length + 1;

          // push event details to events
          _centers2['default'].push(req.body);

          return res.status(201).json({
            message: 'Center created successfully'
          });
        }
        return res.status(400).json({
          message: 'Please fill in all required fields'
        });
      }

      return createCenter;
    }()

    /**
     * @static Update a center
     * @param {obj} req
     * @param {obj} res
     * @returns message and list of centers as the case may be
     * @memberof centerController
     */

  }, {
    key: 'updateCenter',
    value: function () {
      function updateCenter(req, res) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = _centers2['default'][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var center = _step2.value;

            if (center.id === parseInt(req.params.centerId, 10)) {
              center.name = req.body.name || center.name;
              center.capacity = req.body.capacity || center.capacity;
              center.address = req.body.address || center.address;
              center.area = req.body.area || center.area;
              center.state = req.body.state || center.state;
              center.amount = req.body.amount || center.amount;
              center.facilities = req.body.facilities || center.facilities;
              center.description = req.body.description || center.description;

              return res.status(204).json({
                center: center,
                message: 'Center updated successfully'
              });
            }
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
          message: 'Center not Found'
        });
      }

      return updateCenter;
    }()

    /**
     * @static Delete an Event
     * @param {obj} req
     * @param {obj} res
     * @returns
     * @memberof centerController
     */

  }, {
    key: 'deleteCenter',
    value: function () {
      function deleteCenter(req, res) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _centers2['default'][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var center = _step3.value;

            if (center.id === parseInt(req.params.centerId, 10)) {
              _centers2['default'].splice(center, 1);
              return res.status(202).json({
                message: 'Center Deleted'
              });
            }
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
          message: 'Center not Found'
        });
      }

      return deleteCenter;
    }()
  }]);

  return CentersController;
}();

exports['default'] = CentersController;