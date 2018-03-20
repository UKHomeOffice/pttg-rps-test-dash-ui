'use strict';

const hof = require('hof-form-controller');

module.exports = {
  nameEmail: {
    validate: 'required',
    minlength: 'required'
  },
  password: {
    validate: 'required'
  },
  testResults: {
    mixin: 'select',
    options: require('hof-util-countries')(),
    validate: 'required'
  },
  date: {
    validate: 'required'
  }
};
