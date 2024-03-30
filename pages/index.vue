<script setup>
const demos = [
  {
    title: "im-web",
    desc: "websocket在线聊天, 后端(ws + node)",
    to: "https://ackuikui.com:4433/im-web",
    img: "im-web.png",
  },
  {
    title: "react-web",
    desc: "react项目(react, react-redux, react-router-dom, ant-design)",
    to: "https://ackuikui.com:4433/react-project",
    img: "react-project.png",
  },
  {
    title: "vue2-project",
    desc: "vue2项目(vue-router、 axios、 element-ui、 echarts), 后端(express、mysql)",
    to: "https://ackuikui.com:4433/vue2-project",
    img: "/vue2-project.png",
  },
  {
    title: "text-ai-web",
    desc: "文字生成图片",
    to: "https://ackuikui.com:4433/text-ai-web",
    img: "text-ai-web.png",
  },
  {
    title: "my-site",
    desc: "即当前本站，使用 nuxt + nuxt/content + tailwindcss, 学习 Nuxt UI Pro 组件设计, 服务器资源有限-使用 nuxt generate 生成静态站点",
    to: "/",
    img: "",
  },
  {
    title: "vuepress-site",
    desc: "vue静态博客，使用 vuepress",
    to: "https://ackuikui.com:4433/vuepress-site/",
    img: "vuepress-site.png",
  },
];

function open(to) {
  // navigateTo(to);
  window.open(to, "kuikui_tab");
}
</script>

<template>
  <KkContainer>
    <div class="mx-auto pt-12 pb-16 max-w-7xl text-center">
      <h2
        class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
      >
        Demo Project
      </h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      <div
        v-for="item in demos"
        :key="item.id"
        @click="open(item.to)"
        class="demo-item relative h-80 border rounded-sm overflow-hidden shadow-md cursor-pointer"
      >
        <div
          class="demo-bg bg-cover h-60"
          :style="{ 'background-image': `url(${item.img})` }"
        ></div>
        <div
          class="absolute w-full bottom-0 bg-purple-100 py-2 px-4 h-auto min-h-24"
        >
          <p class="title text-xl pb-2">{{ item.title }}</p>
          <p class="desc text-sm text-gray-500">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </KkContainer>
</template>

<style>
.demo-item:hover .demo-bg {
  transform: scale(1.1);
}
</style>
