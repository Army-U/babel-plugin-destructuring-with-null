var _destructuring_with_null = _interopRequireDefault(require("{{. __dirname}}/get.js")).default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var coords = [1, 2];
x = _destructuring_with_null(coords, "x", 1);
var y = coords.y;