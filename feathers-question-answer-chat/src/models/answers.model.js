// answers-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'answers';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    text: { type: String, required: true },
    questionId: { type: String, required: true },
    userId: {type: Schema.Types.ObjectId, ref: 'users', required: true}, 
    timeTaken: String
  }, {
    timestamps: true
  });
  // put your pre and post save schema instance methods here 
  schema.pre('save', function () {
    this.setTimeTaken();
  });
  schema.post('save', function () {
    this.updateAnswerArray();
  });

  schema.methods.updateAnswerArray = function () {
    // write code here to save the answer text into the answer array of question    
    const fromDb = app.service('questions').findOne({_id: this.questionId });  
    fromDb.answers.splice(0, 0, this.answer); 
    fromDb.save();
  };

  schema.methods.setTimeTaken = function () {
    var answer = this;
    var ms = this.updatedAt - this.createdAt;
    var x = ms / 1000;
    var seconds = Math.floor(x % 60);
    x /= 60;
    var minutes = Math.floor(x % 60);
    x /= 60;
    var hours = Math.floor(x % 24);
    answer.timeTaken = hours + 'h:' + minutes + 'm:' + seconds + 's';
  };

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};

