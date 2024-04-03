<template>
  <div>
    <ULink
      v-for="(item, index) of links"
      :key="item.to + index"
      :to="'#' + item.id"
      class=" block p-1 text-base"
      active-class="text-purple-500"
      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
    >
      {{ item.text }}
      <!-- 这里不做第三层h3嵌套了 -->
    </ULink>
  </div>
</template>

<script setup>
const props = defineProps({
  links: {
    type: Array,
    // required: true,
    default: () => {
      return [];
    },
  },
});

// onMounted(() => {
//   console.log(props.links);
// });
</script>

<style lang="scss" scoped></style>
