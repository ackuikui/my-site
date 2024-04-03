<script setup>
const links = [
  {
    label: "首页",
    to: "/",
  },
  {
    label: "文章专栏",
    to: "/article",
  },
  {
    label: "随笔记录",
    to: "/memo",
  },
];
</script>

<template>
  <div
    class="bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50"
  >
    <KkContainer
      class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between h-14"
    >
      <!-- header left, logo -->
      <div>
        <a href="/" class="font-bold text-xl text-gray-900">ackuikui</a>
      </div>

      <!-- header center,导航 -->
      <div class="flex items-center gap-x-8 font-semibold text-sm/6">
        <ULink
          v-for="(item, index) of links"
          :key="item.to"
          :to="item.to"
          active-class="text-purple-500"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          {{ item.label }}
        </ULink>
      </div>

      <!-- header right -->
      <div>
        <!-- github link -->
      </div>
    </KkContainer>
  </div>
</template>
