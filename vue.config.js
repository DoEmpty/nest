module.exports = {
  // css: {
  //   modules: true,
  //   loaderOptions: {
  //     scss: {
  //       data: `@import "@/style/variable.scss";`
  //     }
  //   }
  // },
  devServer: {
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
