# vue2
官方文档  
https://v2.cn.vuejs.org/v2/guide/index.html

个人记录  
https://demos.ackuikui.com/vuepress-site/vueblog/

## 路由
懒加载()=>import() 和 预加载webpackPrefetch
```js
  {
    path: "/chartsPage",
    name: "chartsPage",
    component: () =>
      import(/* webpackChunkName: "charts", webpackPrefetch: true */ "../views/chartsPage/index.vue"),
  },
```