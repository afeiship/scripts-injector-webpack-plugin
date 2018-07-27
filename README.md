# scripts-injector-webpack-plugin
> Scripts injector webpack plugin.

## install:
```bash
npm install afeiship/scripts-injector-webpack-plugin
```

## usage:
```js
new ScriptsInjectorWebpackPlugin({
  replacements:[
    function(inHtml){
      return inHtml.replace('</body>','<!--YOUR CODE--></body>')
    }
  ]
})
```


## resource:
+ http://www.cnblogs.com/haogj/p/5649670.html
+ http://www.cnblogs.com/haogj/p/5160821.html


## dependences:
+ MUST IMPORT `html-webpack-plugin`
