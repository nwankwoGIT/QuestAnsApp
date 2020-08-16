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
 
 //MongoDB will return its results in unsorted order by default. 
 //However, text search queries will compute a relevance score for each document that specifies how well a document matches the query.
 //To sort the results in order of relevance score, you must explicitly project the $meta textScore field and sort on it:

 const textSearch = async(searchtext) => {
  return await client.service('questions').find( 
  { $text: { $search: searchtext } },
  { score: { $meta: 'textScore' } }
).sort( { score: { $meta: 'textScore' } } )
}   

module.exports = {
    getUsers,
    getQuestions,
    getAnswers,
    getQuestionsPerCategory,
    textSearch
};  