module.exports = {
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
