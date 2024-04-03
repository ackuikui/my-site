# elementUI

## 组件扩展问题
```vue
<template>
    <el-button v-bind="attrs" v-on="$listeners">
      <slot v-bind="slots"></slot>
    </el-button>
</template>

<script>
export default {
  computed: {
    attrs() {
      return {
        type: "primary",
        ...this.$attrs,
      };
    },
    slots() {
      return {
        default: this.$slots.default,
      };
    },
  },
};
</script>
```