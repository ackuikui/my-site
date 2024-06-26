/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin')

export default {
  // 申明这些vue文件使用tailwind解析
  content: ["./pages/**/*.vue", "./components/**/*.vue"],
 
  theme: {
    extend: {
      // 排版插件-修改md生成文本样式
      // 参考文档 https://github.com/tailwindlabs/tailwindcss-typography 
      typography: ({ theme }) => ({
        // 参考 https://content.nuxt.com/ 使用的primary自定义的背景色和边框
        // 使用时 class="prose prose-kk", 默认排版名prose不调整
        kk: {
          css: {
            '--tw-prose-pre-bg': 'rgb(var(--color-gray-50))',
            '--tw-prose-pre-border': 'rgb(var(--color-gray-200))',

            // DEFAULT
            'max-width': "80ch", // 80字符0
          }
        },

        // 修改默认样式 pre带边框，code加内边距和圆角-不要`符号包裹
        // 取自tailwind.config.d.ts
        DEFAULT: {
          css: {
            "h1, h2, h3, h4": {
              fontWeight: "700",
              "scroll-margin-top": "var(--scroll-mt)",
            },
            "h1 a, h2 a, h3 a, h4 a": {
              borderBottom: "none !important",
              color: "inherit",
              fontWeight: "inherit",
            },
            a: {
              fontWeight: "500",
              textDecoration: "none",
              borderBottom: "1px solid transparent",
            },
            "a:hover": { borderColor: "var(--tw-prose-links)" },
            "a:has(> code)": { borderColor: "transparent !important" },
            "a code": {
              color: "var(--tw-prose-code)",
              border: "1px dashed var(--tw-prose-pre-border)",
            },
            "a:hover code": {
              color: "var(--tw-prose-links)",
              borderColor: "var(--tw-prose-links)",
            },
            pre: {
              borderRadius: "0.375rem",
              border: "1px solid var(--tw-prose-pre-border)",
              color: "var(--tw-prose-pre-code) !important",
              backgroundColor: "var(--tw-prose-pre-bg) !important",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            },
            code: {
              backgroundColor: "var(--tw-prose-pre-bg)",
              padding: "0 0.375rem",
              display: "inline-block",
              borderRadius: "0.375rem",
              border: "1px solid var(--tw-prose-pre-border)",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            "blockquote p:first-of-type::before": { content: "" },
            "blockquote p:last-of-type::after": { content: "" },
            'input[type="checkbox"]': {
              color: "rgb(var(--color-primary-500))",
              borderRadius: "0.25rem",
              borderColor: "rgb(var(--color-gray-300))",
              height: "1rem",
              width: "1rem",
              marginTop: "-3.5px !important",
              marginBottom: "0 !important",
              "&:focus": { "--tw-ring-offset-width": 0 },
            },
            'input[type="checkbox"]:checked': {
              borderColor: "rgb(var(--color-primary-500))",
            },
            'input[type="checkbox"]:disabled': {
              opacity: 0.5,
              cursor: "not-allowed",
            },
            "ul.contains-task-list": { marginLeft: "-1.625em" },
            "ul ul": { paddingLeft: "1.5rem" },
            "ul ol": { paddingLeft: "1.5rem" },
            "ul > li.task-list-item": { paddingLeft: "0 !important" },
            "ul > li.task-list-item input": { marginRight: "7px" },
            "ul > li.task-list-item > ul.contains-task-list": {
              marginLeft: "initial",
            },
            "ul > li.task-list-item a": { marginBottom: 0 },
            "ul > li.task-list-item::marker": { content: "none" },
            "ul > li > p": { margin: 0 },
            "ul > li > span.issue-badge, p > span.issue-badge": {
              verticalAlign: "text-top",
              margin: "0 !important",
            },
            "ul > li > button": { verticalAlign: "baseline !important" },
            table: { display: "block", overflowX: "auto" },
            "table code": { display: "inline-flex" },

          },
        },

      }),
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
  ],
}
