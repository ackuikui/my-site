
# vite
同webapck对比使用

## 创建项目
`npm create vite@latest`

`cd vite-project`

使用vue模板，+ typescript

`npm i`

## 手动添加 typescript
package.json  
`typescript`  
`vue-tsc`  

## 添加 element puls
`npm install element-plus`
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(ElementPlus)

### 按需导入 element puls
unplugin-auto-import
