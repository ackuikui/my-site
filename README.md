# Nuxt UI Minimal Starter

node 18

modify host while download ui template failed
`185.199.108.133 raw.githubusercontent.com`

`npx nuxi init -t ui my-site`

`npx nuxi init my-site` 不使用模板，ui模板，ui-pro


## generate
`npm run generate` 打包静态部署



## build
`npm run build`
> 问题 window powershell上报错
+ set PORT=3111 && node ./dist/server/index.mjs
+               ~~
标记“&&”不是此版本中的有效语句分隔符。
换用cmd执行

> 服务器部署 build ssr版
PORT=800 node ./dist/server/index.mjs
nuxt-site.sh文件，






Look at [Nuxt docs](https://nuxt.com/docs/getting-started/introduction) and [Nuxt UI docs](https://ui.nuxt.com) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
