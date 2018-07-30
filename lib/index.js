var objectAssign = require('object-assign');

function ScriptsInjectorWebpackPlugin(inOptions) {
  this._options = objectAssign({
    replacements: []
  }, inOptions);
}

ScriptsInjectorWebpackPlugin.prototype.apply = function (compiler) {

  var replacements = this._options.replacements;
  if (compiler.hooks) {
    // webpack >=4.0
    compiler.hooks.compilation.tap('ScriptsInjectorWebpackPlugin', (compilation) => {
      compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tapAsync(
        'ScriptsInjectorWebpackPlugin',
        function (data, callback) {
          replacements.forEach(function (replacement) {
            data.html = replacement(data.html);
          });
          callback(null, data);
        }
      )
    })
  } else {
    // webpack < 4.0:
    compiler.plugin('compilation', function (compilation) {
      compilation.plugin(
        'html-webpack-plugin-before-html-processing',
        function (data, callback) {
          replacements.forEach(function (replacement) {
            data.html = replacement(data.html);
          });
          callback(null, data);
        }
      );
    });
  }

}

module.exports = ScriptsInjectorWebpackPlugin;
