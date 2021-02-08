module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/my-project/'
    : '/',
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/styles/variables.scss";
                    @import "@/styles/mixins.scss";
                `
            }
        }
    }
}
