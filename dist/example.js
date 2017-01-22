'use strict';

require('babel-polyfill');

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
  var a, b, c, result;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          a = function a(x) {
            return x + 1;
          };

          b = function b(x) {
            return Promise.resolve(x * 2);
          };

          c = function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(x) {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Promise.resolve();

                    case 2:
                      return _context.abrupt('return', x);

                    case 3:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, undefined);
            }));

            return function c(_x) {
              return _ref2.apply(this, arguments);
            };
          }();

          _context2.next = 5;
          return (0, _2.default)(a, b, c)(99);

        case 5:
          result = _context2.sent;

          console.log(result); // PRINTS: 200

        case 7:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, undefined);
}))();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImEiLCJ4IiwiYiIsIlByb21pc2UiLCJyZXNvbHZlIiwiYyIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOzs7Ozs7OztBQUVBLDBDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPQSxXQURQLEdBQ1csU0FBSkEsQ0FBSTtBQUFBLG1CQUFLQyxJQUFJLENBQVQ7QUFBQSxXQURYOztBQUVPQyxXQUZQLEdBRVcsU0FBSkEsQ0FBSTtBQUFBLG1CQUFLQyxRQUFRQyxPQUFSLENBQWdCSCxJQUFJLENBQXBCLENBQUw7QUFBQSxXQUZYOztBQUdPSSxXQUhQO0FBQUEsa0VBR1csaUJBQU1KLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQ0ZFLFFBQVFDLE9BQVIsRUFERTs7QUFBQTtBQUFBLHVEQUVESCxDQUZDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSFg7O0FBQUEsNEJBR09JLENBSFA7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxpQkFRc0IsZ0JBQ25CTCxDQURtQixFQUVuQkUsQ0FGbUIsRUFHbkJHLENBSG1CLEVBSW5CLEVBSm1CLENBUnRCOztBQUFBO0FBUU9DLGdCQVJQOztBQWFDQyxrQkFBUUMsR0FBUixDQUFZRixNQUFaLEVBYkQsQ0Fhc0I7O0FBYnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQUQiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgYXN5bmNwaXBlIGZyb20gJy4nO1xuXG4oYXN5bmMoKSA9PiB7XG4gIGNvbnN0IGEgPSB4ID0+IHggKyAxO1xuICBjb25zdCBiID0geCA9PiBQcm9taXNlLnJlc29sdmUoeCAqIDIpO1xuICBjb25zdCBjID0gYXN5bmMgeCA9PiB7XG4gICAgYXdhaXQgUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgcmV0dXJuIHg7XG4gIH07XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXN5bmNwaXBlKFxuICAgIGEsXG4gICAgYixcbiAgICBjLFxuICApKDk5KTtcbiAgY29uc29sZS5sb2cocmVzdWx0KTsgLy8gUFJJTlRTOiAyMDBcbn0pKCk7Il19