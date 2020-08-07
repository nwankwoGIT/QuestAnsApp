const users = require('./users/users.service.js');
const questions = require('./questions/questions.service.js');
const answers = require('./answers/answers.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(questions);
  app.configure(answers);
};
