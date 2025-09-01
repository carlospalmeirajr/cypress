const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeaded) {
          launchOptions.args.push('--disable-popup-blocking');
          launchOptions.args.push('--disable-ads');
          launchOptions.args.push('--disable-features=IsolateOrigins,site-per-process');
          launchOptions.args.push('--disable-blink-features=AutomationControlled');
        }
        return launchOptions;
      });

      on('task', {
        blockAds() {
          const blockedDomains = [
            'googleads.g.doubleclick.net',
            'pagead2.googlesyndication.com',
            'core.yads.tech',
            'display.yads.tech',
          ];

          on('before:browser:launch', (browser = {}, options) => {
            options.preferences.default.profile = {
              content_settings: {
                exceptions: {
                  plugins: {
                    ads: { setting: 2 },
                  },
                },
              },
            };
            return options;
          });

          return null;
        },
      });

      return config;
    },
    //specPattern: 'cypress/e2e/features/**/*.feature',
    specPattern: '**/*.feature',
    chromeWebSecurity: false, 
    supportFile: 'cypress/support/e2e.js', 
    stepDefinitions: 'cypress/e2e/step_definitions/**/*.js', 
  },
  env: {
    email: 'teste2021@teste.com.br',
    password: 'teste123',
    trelloApiUrl: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a',
    loginUrl: 'https://www.automationexercise.com/login',
  },
});
