"use strict";

var _client = require("react-dom/client");
var _App = _interopRequireDefault(require("./App"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
console.log('App', _App["default"]);
(0, _client.createRoot)(document.getElementById('root')).render( /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_App["default"], null)));