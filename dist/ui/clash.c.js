'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addressBarAddressBarC = require('./addressBar/addressBar.c');

var _addressBarAddressBarC2 = _interopRequireDefault(_addressBarAddressBarC);

var _titleBarTitleBarC = require('./titleBar/titleBar.c');

var _titleBarTitleBarC2 = _interopRequireDefault(_titleBarTitleBarC);

var _fileListFileListC = require('./fileList/fileList.c');

var _fileListFileListC2 = _interopRequireDefault(_fileListFileListC);

var Clash = (function (_React$Component) {
  _inherits(Clash, _React$Component);

  function Clash() {
    _classCallCheck(this, Clash);

    _get(Object.getPrototypeOf(Clash.prototype), 'constructor', this).call(this);
    this.state = { dir: '' };
  }

  _createClass(Clash, [{
    key: 'dirSelected',
    value: function dirSelected(dir) {
      this.setState({ dir: dir });
      this.refs.filelist.onDirChanged(dir);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_titleBarTitleBarC2['default'], null),
        _react2['default'].createElement(_addressBarAddressBarC2['default'], { onDirSelected: this.dirSelected.bind(this) }),
        _react2['default'].createElement(
          'p',
          null,
          'You are running ',
          _react2['default'].createElement(
            'em',
            null,
            'Clash'
          ),
          '.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          this.state.dir
        ),
        _react2['default'].createElement(_fileListFileListC2['default'], { dir: this.state.dir, ref: 'filelist' })
      );
    }
  }]);

  return Clash;
})(_react2['default'].Component);

exports['default'] = Clash;
module.exports = exports['default'];