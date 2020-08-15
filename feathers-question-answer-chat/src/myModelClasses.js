/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

// Get the Schema constructor
var Schema = mongoose.Schema;

// Using Schema constructor, create a ProductSchema
var ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }]
});


// Using Schema constructor, create a ProductSchema
var ReviewSchema = new Schema({
  stars: {
    type: Number,
    required: true
  },
  review: {
    type: String,
    required: true
  }
});


const QuestionSchema = mongoose.Schema; 
const Question = new QuestionSchema({
  question: {type: String, required: true, },    
  answers: [{type: String, required: false, }],
  userId: {type: String, required: false, },  
}, {
  timestamps: true
});   
const AnswerSchema = mongoose.Schema; 
const Answer = new AnswerSchema({
  answer: {type: String, required: true, }, 
  questionId: {type: String, required: true, },
  userId: {type: String, required: false, },      
}, {
  timestamps: true
});       

const QuestionModel = mongoose.model('question', Question);
const AnswerModel = mongoose.model('answer', Answer);
var Review = mongoose.model('Review', ReviewSchema);
var Product = mongoose.model('Product', ProductSchema);


module.exports = {
  QuestionModel,
  AnswerModel,
  Review,
  Product
};

