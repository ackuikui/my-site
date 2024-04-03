<script setup lang="ts">

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())


</script>

<template>
  <KkContainer class="relative grid grid-cols-12 gap-4">
    <!-- 左侧h2导航 -->
    <KkPageLinks
      :links="page.body.toc.links"
      class="sticky overflow-auto col-span-3 pt-6"
      style="max-height: calc(100vh - 56px); top: 56px;"
    ></KkPageLinks>

    <main class="prose prose-kk col-span-9 p-4">
      <!-- 正文 -->
      <ContentDoc />
    </main>
  </KkContainer>
</template>
