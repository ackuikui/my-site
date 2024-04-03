# plugin
调用 对象的apply方法    
常见钩子 ，配置-启动-编译-写入-完成  
`beforeRun` 启动前，读取配置
`afterCompile` 编译后
`emit` from输出to
`done` 完成 可清理

1. my-plugin.js
```js
class Plugin{
    apply(compiler){
        compiler.hooks.run.tap('MyPlugin', (compilation) => {
            console.log("构建正在启动");
            /* ... */
        });
    }
}
module.exports = Plugin
```

2. 配置
vue.config.js
```js
const MyPlugin = require('./my-plugin.js')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  configureWebpack: {
    plugins: [
      new MyPlugin()
    ]
  },
});
```

3. 运行结果
`npm run build`  
启动时, 控制台打印 "构建正在启动"  