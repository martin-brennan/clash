'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _directoryBarC = require('./directoryBar.c');

var _directoryBarC2 = _interopRequireDefault(_directoryBarC);

var _directorySelectorC = require('./directorySelector.c');

var _directorySelectorC2 = _interopRequireDefault(_directorySelectorC);

var AddressBar = (function (_React$Component) {
  _inherits(AddressBar, _React$Component);

  function AddressBar() {
    _classCallCheck(this, AddressBar);

    _get(Object.getPrototypeOf(AddressBar.prototype), 'constructor', this).call(this);

    this.state = { dir: 'C:/users/martin/music' };
  }

  _createClass(AddressBar, [{
    key: 'dirSelected',
    value: function dirSelected(dir) {
      this.setState({ dir: dir });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { id: "address-bar" },
        _react2['default'].createElement(_directoryBarC2['default'], { dir: this.state.dir }),
        _react2['default'].createElement(_directorySelectorC2['default'], { dir: this.state.dir, onDirectorySelected: this.dirSelected.bind(this) })
      );
    }
  }]);

  return AddressBar;
})(_react2['default'].Component);

exports['default'] = AddressBar;
module.exports = exports['default'];