<template>
  <div>
    <ContentList path="/article" v-slot="{ list }">
      <NuxtLink
        v-for="article in list"
        :key="article._path"
        :to="article._path"
        class="max-w-screen-xl mx-auto border p-4 rounded block my-4"
      >
        <h2 class="text-gray-800 font-semibold">{{ article.title }}</h2>
        <p class="text-slate-400">{{ article.description }}</p>
      </NuxtLink>
    </ContentList>
  </div>
</template>

<script setup>
// const { data: navigation } = await useAsyncData("navigation", () =>
//   fetchContentNavigation()
// );

// const list = navigation._rawValue[0].children;
// console.log(navigation);
onMounted(() => {
  document.title =  '文章专栏'
})

</script>

<style lang="scss" scoped></style>
