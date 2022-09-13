const { defineConfig } = require('cypress')
module.exports = defineConfig({
  defaultCommandTimeout: 40000,
  pageLoadTimeout: 90000,
  viewportWidth: 1280,
  viewportHeight: 800,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    // specPattern: 'cypress/integration/**/*.feature',

  },
})
