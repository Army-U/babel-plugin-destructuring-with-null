var _destructuring_with_null = _interopRequireDefault(require("{{. __dirname}}/get.js")).default;

function _sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return _sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = ["foo", "hello", [", ", "junk"], ["world"]],
    a = _ref[1],
    _ref$ = _slicedToArray(_ref[2], 1),
    b = _ref$[0],
    _ref$2 = _slicedToArray(_ref[3], 1),
    c = _ref$2[0],
    d = _ref[4];