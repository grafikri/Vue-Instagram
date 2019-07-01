module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vue-Instragram/'
    : '/',
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "~@/assets/style/_base.sass";`
      }
    }
  }
}