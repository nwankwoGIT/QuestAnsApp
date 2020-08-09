/* eslint-disable linebreak-style */
const mongoose = require('mongoose');
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

module.exports = {
  QuestionModel,
  AnswerModel
};