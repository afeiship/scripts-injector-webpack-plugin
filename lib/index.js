var objectAssign = require('object-assign');

function ScriptsInjectorWebpackPlugin(inOptions) {
  this._options = objectAssign({
    replacements: []
  }, inOptions);
}

ScriptsInjectorWebpackPlugin.prototype.apply = function (compiler) {
  var replacements = this._options.replacements;

  compiler.hooks.compilation.tap('ScriptsInjectorWebpackPlugin', (compilation) => {
    compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tapAsync(
      'ScriptsInjectorWebpackPlugin',
      (data, callback) => {
        replacements.forEach(function (replacement) {
          data.html = replacement(data.html);
        });
        callback(null, data);
      }
    )
  })
}

module.exports = ScriptsInjectorWebpackPlugin;
