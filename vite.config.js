import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

console.log(path.resolve(__dirname, "./src"));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置路径别名：通过一个符号对某一个文件夹产生一个绝对路径，在文件夹发生变化的时候路径不用改变
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
