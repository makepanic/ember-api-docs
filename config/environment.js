/* eslint-env node */
module.exports = function(environment) {
  let ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID || 'BH4D9OD16A';
  let ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY || '760969ef081fcadc7e0e60faefdb0907';

  let ENV = {
    modulePrefix: 'ember-api-docs',
    environment,
    rootURL: '/',
    routerRootURL: '/',
    locationType: 'auto',
    API_HOST: 'https://ember-api-docs.global.ssl.fastly.net',
    gaTrackingId: 'UA-XXXXX-Y',
    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {
        //'ember-glimmer': true
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      scrollContainerElement: 'body'
    },

    fastboot: {
      hostWhitelist: [/^[\w\-]+\.herokuapp\.com$/, /^localhost:\d+$/]
    },
    'ember-algolia': {
      algoliaId: ALGOLIA_APP_ID,
      algoliaKey: ALGOLIA_API_KEY
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['ember-a11y-testing'] = {
      componentOptions: {
        turnAuditOff: process.env.test_a11y !== 'yes'
      }
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';
    ENV.testing = true;

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.scrollContainerElement = '#ember-testing-container';
  }

  ENV.contentSecurityPolicy = {
    "default-src": "'self' *.fastly.net",
    "connect-src": "'self' *.algolia.net *.algolianet.com *.fastly.net",
    "script-src": "'self' unsafe-inline use.typekit.net 'sha256-lKBtcUDKd1YsXApz3zgfFp4g7TuIVPSsYg/ic+77Ljo=' *.fastly.net https://www.google-analytics.com",
    "font-src": "'self' data://* https://fonts.gstatic.com  *.fastly.net",
    "img-src": "'self' data://*  *.fastly.net https://www.google-analytics.com",
    "style-src": "'self' 'unsafe-inline' https://fonts.googleapis.com  *.fastly.net"
  };

  if (environment === 'production') {

    /**
     * Ideally we want this to be only for fast boot. But we have to wait for
     * https://github.com/ember-fastboot/ember-cli-fastboot/issues/254 to be
     * solved for that
     */
    ENV.routerRootURL = process.env.DOCS_SLUG ? process.env.DOCS_SLUG : '/api/';
    ENV.gaTrackingId = 'UA-27675533-1';

  }

  return ENV;
};
