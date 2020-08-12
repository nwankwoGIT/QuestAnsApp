/* eslint-disable linebreak-style */
const { authenticate } = require('@feathersjs/authentication').hooks;
const processAnswer = require('../../hooks/process-answer');
const populateAnswer = require('../../hooks/populate-answer');
module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [processAnswer()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [populateAnswer()],
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
