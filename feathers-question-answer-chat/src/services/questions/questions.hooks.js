/* eslint-disable linebreak-style */
const { authenticate } = require('@feathersjs/authentication').hooks;
const processQuestion = require('../../hooks/process-question');
const populateQuestion = require('../../hooks/populate-question');


module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [processQuestion()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [populateQuestion()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
