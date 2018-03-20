'use strict';

module.exports = {
  name: 'my-hof-form2',
  baseUrl: '/',
  steps: {
    '/sign-in': {
      fields: ['nameEmail', 'password'],
      next: '/test-results'
    },
    '/test-results': {
      fields: ['date', 'testResults'],
      next: '/confirm'
    },
    '/confirm': {
      behaviours: ['complete', require('hof-behaviour-summary-page')],
      next: '/complete'
    },
    '/complete': {
      template: 'confirmation'
    }
  }
};
