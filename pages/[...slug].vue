<script setup lang="ts">

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

let isod = /^\/article\/od/.test(route.path)
</script>

<template>
  <KkContainer class="relative grid grid-cols-12 gap-4">
    <!-- 左侧h2导航 -->
    <KkPageLinks
      :links="page.body.toc.links"
      class="sticky overflow-auto  pt-6"
      :class="isod ? 'col-span-4' : 'col-span-3'"
      style="max-height: calc(100vh - 56px); top: 56px;"
    ></KkPageLinks>

    <main class="prose prose-kk p-4" :class="isod ? 'col-span-8' : 'col-span-9'">
      <!-- 正文 -->
      <ContentDoc />
    </main>
  </KkContainer>
</template>
