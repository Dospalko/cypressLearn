const { defineConfig } = require("cypress");
 import { resetDb } from './cypress/tasks/resetDb'

module.exports = defineConfig({
  projectId: 'nvrnry',
  viewportHeight: 660,
  viewportWidth: 1000,
  e2e: {
    setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {

      
       on('task', { 
        reset: resetDb
       })

      // config
      // config.baseUrl = process.env.CI ? 'https://skillmea.sk' : 'http://localhost:3000'
      // return config
    },
    // specPattern: '**/headless/*.cy.{js,ts}',
    excludeSpecPattern: '**/headless/*.cy.{js,ts}',
    baseUrl: 'http://localhost:3000',
    experimentalWebKitSupport: true,
    // env: {
    //   requestMode: true
    // }
  }
});
