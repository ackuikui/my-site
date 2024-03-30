<script setup>
import { ref } from "vue";

const hoverLink = ref("/");
const bakLink = hoverLink.value;

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
  <KkContainer
    class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between h-14"
  >
    <div>
      <!-- logo -->
      <a href="/" class="font-bold text-xl text-gray-900">ackuikui</a>
    </div>

    <div class="flex items-center gap-x-8 font-semibold text-sm/6">
      <a
        v-for="(item, index) in links"
        :key="item.to"
        @mouseover="hoverLink = item.to"
        @mouseout="hoverLink = bakLink"
        :href="item.to"
        class="cursor-pointer"
        :class="{ 'text-purple-500': hoverLink == item.to }"
        >{{ item.label }}</a
      >
    </div>

    <div>
      <!-- github link -->
    </div>
  </KkContainer>
</template>
