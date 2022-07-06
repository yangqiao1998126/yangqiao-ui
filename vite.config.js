import { defineConfig,loadEnv } from "vite";
import Vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import { resolve } from "path";


export default defineConfig(({command,mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  const entryName = env.VITE_BASE_ENTRYNAME
  let buildOptions = {}
  if(entryName === 'html'){

  }else{
    buildOptions = {
      rollupOptions: {
        // 请确保外部化那些你的库中不需要的依赖
        external: ["vue"],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: "Vue",
          },
        },
      },
      lib: {
        entry: "./packages/index.js",
        name: "yq-ui",
      },
    }
  }
  return {
    plugins: [
      Vue({
        include: [/\.vue$/, /\.md$/], // <--
      }),
      Markdown(),
    ],
    build: {
      ...buildOptions
    },
    resolve: {
      alias: {
        "@": resolve(__dirname,".","src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {

        },
      },
    },
  }
});
