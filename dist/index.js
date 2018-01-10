'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var REPLACER = '</body>';
var CHARSET = 'utf-8';

var StatisticInjectorWebpackPlugin = function () {
  function StatisticInjectorWebpackPlugin(inOptions) {
    _classCallCheck(this, StatisticInjectorWebpackPlugin);

    var replacer = inOptions.replacer || REPLACER;
    this.options = Object.assign({
      callback: function callback(inHtml, inString) {
        return inHtml.replace(replacer, '' + inString + replacer);
      }
    }, inOptions);
  }

  _createClass(StatisticInjectorWebpackPlugin, [{
    key: 'apply',
    value: function apply(compiler) {
      var _this = this;

      var path = this.options.path;

      var statisString = _fs2.default.readFileSync(path, CHARSET);

      compiler.plugin('compilation', function (compilation) {
        compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
          htmlPluginData.html = _this.options.callback(htmlPluginData.html, statisString);
          callback(null, htmlPluginData);
        });
      });
    }
  }]);

  return StatisticInjectorWebpackPlugin;
}();

exports.default = StatisticInjectorWebpackPlugin;