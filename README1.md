# scripts-injector-webpack-plugin
> Scripts injector webpack plugin.

## install:
```bash
npm install afeiship/scripts-injector-webpack-plugin
```

## usage:
```js
new StatisticInjectorWebpackPlugin({
  path:'YOUR_SCRIPT_FILEPATH',
  callback: function(html,filestr){
    return html.replace('</head>',`${filestr}</head>`);
  }
})
```


## resource:
+ http://www.cnblogs.com/haogj/p/5649670.html
+ http://www.cnblogs.com/haogj/p/5160821.html


## dependences:
+ MUST IMPORT `html-webpack-plugin`
