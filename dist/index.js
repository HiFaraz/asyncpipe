'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  for (var _len = arguments.length, steps = Array(_len), _key = 0; _key < _len; _key++) {
    steps[_key] = arguments[_key];
  }

  return function (arg) {
    return steps.reduce(function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(value, step) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = step;
                _context.next = 3;
                return value;

              case 3:
                _context.t1 = _context.sent;
                return _context.abrupt('return', (0, _context.t0)(_context.t1));

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(), arg);
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdGVwcyIsImFyZyIsInJlZHVjZSIsInZhbHVlIiwic3RlcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O2tCQUVlO0FBQUEsb0NBQUlBLEtBQUo7QUFBSUEsU0FBSjtBQUFBOztBQUFBLFNBQWMsVUFBQ0MsR0FBRDtBQUFBLFdBQVNELE1BQU1FLE1BQU47QUFBQSwyREFBYSxpQkFBTUMsS0FBTixFQUFhQyxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBc0JBLElBQXRCO0FBQUE7QUFBQSx1QkFBaUNELEtBQWpDOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFiOztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXNERixHQUF0RCxDQUFUO0FBQUEsR0FBZDtBQUFBLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICguLi5zdGVwcykgPT4gKGFyZykgPT4gc3RlcHMucmVkdWNlKGFzeW5jKHZhbHVlLCBzdGVwKSA9PiBzdGVwKGF3YWl0IHZhbHVlKSwgYXJnKTsiXX0=