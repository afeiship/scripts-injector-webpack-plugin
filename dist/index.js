'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var replacer = '</head>';

var StatisticInjectorWebpackPlugin = function () {
  function StatisticInjectorWebpackPlugin(inOptions) {
    _classCallCheck(this, StatisticInjectorWebpackPlugin);

    this.options = Object.assign({
      callback: function callback(inHtml, inString) {
        return inHtml.replace(replacer, '' + inString + replacer);
      }
    }, inOptions);
  }

  _createClass(StatisticInjectorWebpackPlugin, [{
    key: 'apply',
    value: function apply(compiler) {
      var path = this.options.path;

      var statisString = fs.readFileSync(path, 'utf8');
      compiler.plugin('compilation', function (compilation) {
        compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
          htmlPluginData.html = this.options.callback(htmlPluginData.html, statisString);
          callback(null, htmlPluginData);
        });
      });
    }
  }]);

  return StatisticInjectorWebpackPlugin;
}();

exports.default = StatisticInjectorWebpackPlugin;