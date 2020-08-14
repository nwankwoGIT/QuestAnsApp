import client from './feathers';
//mongodb://nwankwotony:KelechiArinze1996@ds039125.mlab.com:39125/feathers-question-answer-db

const getUsers = async() => {    
    return await client.service('users')
      .find({})
      .then(function(doc) { 
       console.log(doc);       
       return doc;
    })  
  }
 
 const getQuestions = async() => {    
    return await client.service('questions')
      .find({})
      .then(function(doc) { 
       console.log(doc);       
       return doc;
    })  
  }
const  getAnswers = async() => {    
    return await client.service('answers')
      .find({})
      .then(function(doc) { 
       console.log(doc);       
       return doc;
    })  
  }

  const getQuestionsPerCategory = async(category) => {
   return await client.service('questions').find({      
      category: category      
  }).then(function(doc) { 
    console.log(doc);       
    return doc;
 }) 
 }

module.exports = {
    getUsers,
    getQuestions,
    getAnswers,
    getQuestionsPerCategory
};  