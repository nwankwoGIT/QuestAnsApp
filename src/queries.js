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

 const  deleteAnswer = async(ansId, quesId) => {    
  let answerObj = await client.service('answers').remove({_id: ansId});
  await client.service('questions').get({_id: quesId})    
    .then(function(doc) { 
      const answersToKeep = doc.answers.filter(answer => answer !== answerObj.text)
      client.service('questions').patch({_id:this._id}, {answers: answersToKeep});                  
      return doc;
  });
}

 //  slice syntaxes : if you rather splice instead of push 
    // .splice(1, 1); remove 1 element at index 1:
    // .splice(3, 1) -> remove 1 elem at index 3
    // .splice(0, 0, answer)  ->  insert answer at the beginning (index 0), but remove nothing ( second 0)      


module.exports = {
    getUsers,
    getQuestions,
    getAnswers,
    getQuestionsPerCategory
};  