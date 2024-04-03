# vue3
官方文档 https://cn.vuejs.org/guide/quick-start.html

## 组合式api + setup
```vue
<script setup>
import { ref } from 'vue'
const labelName = ref('名称')
function clickFn() {
  labelName.value = labelName.value + "1";
}
</script>
```

## 生命周期
```js
onMounted(() => {
    console.log('dom')
})
```

## 计算属性
```js
// 一个计算属性 ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
```

## 自定义指令
```js
const vMyDirective = {
  beforeMount: (el) => {
    // 在元素上做些操作
  }
}
```

## prop & emit
```js
const props = defineProps({
  foo: String
})
// props.foo
// {{ foo }}

const emit = defineEmits(['change', 'delete'])
// $emit('someEvent')
```
