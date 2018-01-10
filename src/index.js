import fs from 'fs';

const REPLACER = '</body>';
const CHARSET = 'utf-8';

export default class StatisticInjectorWebpackPlugin {

  constructor(inOptions){
    const replacer = inOptions.replacer || REPLACER;
    this.options =  Object.assign({
      callback: (inHtml,inString)=>{
        return inHtml.replace(replacer,`${inString}${replacer}`);
      }
    },inOptions);
  }

  apply(compiler){
    const { path } = this.options;
    const statisString = fs.readFileSync( path , CHARSET);

    compiler.plugin('compilation',(compilation)=>{
      compilation.plugin('html-webpack-plugin-before-html-processing', (htmlPluginData, callback)=>{
        htmlPluginData.html = this.options.callback(htmlPluginData.html, statisString);
        callback(null, htmlPluginData);
      });
    });
  }

}
