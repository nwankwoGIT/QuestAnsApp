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
    questionId: {type: Schema.Types.ObjectId, ref: 'questions', required: true}, 
    userId: {type: Schema.Types.ObjectId, ref: 'users', required: true}, 
    timeTaken: String
  }, {
    timestamps: true
  });
  // put your pre and post save schema instance methods here for the answer object processing 
  schema.pre('save', function () {
    this.setTimeTaken();
  });

  schema.post('remove', async(document) => {        
    const answer = document.text;
    await app.service('questions').find({ answers: { $in: [answer] } }).then(questions => {
      Promise.all(
        questions.map(question =>
          app.service('questions').update(
            question._id,
            { $pull: { answers: answer } },
            { new: true }
          )
        )
      );
    });
  });

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

