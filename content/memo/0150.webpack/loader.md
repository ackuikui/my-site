# loader
webpack自定义loader

1. loader文件  
function 将原文件转化为js可识别的变量-导出，使用时可直接当js模块导入 
 
md-loader举例，使代码能识别出md文件  
loader中另外安装md解析  
```sh
npm i markdown-it  highlight.js -D
```

md-loader.js
```js
const hljs = require('highlight.js');
const md = require('markdown-it')({
    breaks: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="hljs"><code>' +
                    hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                    '</code></pre>';
            } catch (__) { }
        }

        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
});

module.exports = function(source) {
    var html = '`' + md.render(source) + '`';
    return 'export default' + html
}
```

2. 配置（vuecli项目中）  
vue.config.js  
```js
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('md-loader')
        .loader(require.resolve('./md-loader.js'))
        .end() 
  }
});
```

3. 使用时，可识别  
app.vue
```vue
<template>
  <div id="app">
    <div v-html="md"></div>
  </div>
</template>
<script>
import md from "./a.md"; // a.md内容为 # haha
export default {
  data() {
    return {
      md: md // "<h1>haha</h1>"
    }
  }
};
</script>
```