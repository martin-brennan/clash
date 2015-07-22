'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var ipc = electron_require('ipc');

ipc.on('rend:file:list-dir', function (files, dir) {
  console.log(files);
  var albumArt = document.getElementById('art');

  for (var i = 0; i < files.length; i++) {
    if (files[i].indexOf('.jpg') !== -1) {
      albumArt.src = 'file://' + dir + '/' + files[i];
    }
  }
});

var opendir = document.getElementById('opendir');
opendir.addEventListener('click', function () {
  var dirName = document.getElementById('dir').value;
  listDir(dirName);
});

function listDir(dirName) {
  var dir = '/Users/martin/Music/' + dirName;
  ipc.send('main:file:list-dir', dir);
}

var Lol = (function (_React$Component) {
  _inherits(Lol, _React$Component);

  function Lol() {
    _classCallCheck(this, Lol);

    _get(Object.getPrototypeOf(Lol.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Lol, [{
    key: 'render',
    value: function render() {
      var style = {
        color: 'red'
      };
      return _react2['default'].createElement(
        'p',
        { style: style },
        'LOLOLOLOLOLOLOL ',
        _react2['default'].createElement(
          'a',
          { href: 'http://www.google.com' },
          'GOOGLE DOOD'
        )
      );
    }
  }]);

  return Lol;
})(_react2['default'].Component);

var ExampleComponent = (function (_React$Component2) {
  _inherits(ExampleComponent, _React$Component2);

  function ExampleComponent() {
    _classCallCheck(this, ExampleComponent);

    _get(Object.getPrototypeOf(ExampleComponent.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ExampleComponent, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'h1',
          null,
          'Hello, world!'
        ),
        _react2['default'].createElement(Lol, null)
      );
    }
  }]);

  return ExampleComponent;
})(_react2['default'].Component);

_react2['default'].render(_react2['default'].createElement(ExampleComponent, null), document.getElementById('app'));