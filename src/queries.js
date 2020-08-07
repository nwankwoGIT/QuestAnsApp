import client from './feathers';
const getUsers = () => {    
    return client.service('users')
      .find({})
      .then(function(doc) { 
       console.log(doc);       
       return doc;
    })  
  }
 
 const getQuestions = () => {    
    return client.service('questions')
      .find({})
      .then(function(doc) { 
       console.log(doc);       
       return doc;
    })  
  }
const  getAnswers = () => {    
    return client.service('answers')
      .find({})
      .then(function(doc) { 
       console.log(doc);       
       return doc;
    })  
  }
module.exports = {
    getUsers,
    getQuestions,
    getAnswers
};  