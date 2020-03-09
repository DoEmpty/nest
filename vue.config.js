module.exports = {
  // css: {
  //   modules: true,
  //   loaderOptions: {
  //     scss: {
  //       data: `@import "@/style/variable.scss";`
  //     }
  //   }
  // },
  assetsDir: "static",
  devServer: {
    port: 9091,
    proxy: {
      "/api": {
        target: "http://biaochenxuying.cn",
        changeOrigin: true,
        ws: true
      }
    },
    before: app => {}
  }
};
