const replacer = '</head>';

export default class StatisticInjectorWebpackPlugin {
  constructor(inOptions){
    this.options =  Object.assign({
      callback: (inHtml,inString)=>{
        return inHtml.replace(replacer,`${inString}${replacer}`);
      }
    },inOptions);
  }

  apply(compiler){
    const { path } = this.options;
    const statisString = fs.readFileSync( path , 'utf8');
    compiler.plugin('compilation',function(compilation){
      compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
        htmlPluginData.html = this.options.callback(htmlPluginData.html, statisString);
        callback(null, htmlPluginData);
      });
    });
  }
}
