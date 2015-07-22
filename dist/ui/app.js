'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _clashC = require('./clash.c');

var _clashC2 = _interopRequireDefault(_clashC);

var ClashApplication = function ClashApplication() {
  _classCallCheck(this, ClashApplication);

  _reactDom2['default'].render(_react2['default'].createElement(_clashC2['default'], null), document.getElementById('clash-app'));
};

window.Clash = new ClashApplication();