const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    chromeWebSecurity: false,
    experimentalRunAllSpecs: true, //tambahkan jika ingin run all specs di cypress open
    baseUrl:"https://bookcart.azurewebsites.net/",
    pageLoadTimeout:120000,
    setupNodeEvents(on, config) {
      screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
})