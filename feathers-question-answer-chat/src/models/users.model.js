// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
require('mongoose-type-email');
module.exports = function (app) {
  const modelName = 'users';
  const mongooseClient = app.get('mongooseClient');
  const schema = new mongooseClient.Schema({
    email : { type: mongooseClient.SchemaTypes.Email, unique: true, required: [true, 'Email is required'], },	
    password: { type: String},
    firstname: { type: String, required: false,},
    lastname: { type: String ,required: false, },    
    phone: { type: String ,required: false, },      
    avatar : {type: String, required: false, },        
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
