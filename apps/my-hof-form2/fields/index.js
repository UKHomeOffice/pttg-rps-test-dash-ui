'use strict';

const hof = require('hof-form-controller');

module.exports = {
  name: {
    validate: 'required',
    minlength: 'required'
  },
  email: {
    validate: 'required'
  },
  testResults: {
    mixin: 'select',
    options: require('hof-util-countries')(),
    validate: 'required'
  }

  
};
