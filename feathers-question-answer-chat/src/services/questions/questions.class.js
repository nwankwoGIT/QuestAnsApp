const { Service } = require('feathers-mongoose');
exports.Questions = class Questions extends Service {
  
};


/*
create (data, params) {
    // This is the information we want from the user signup data
    const { text, category, userId, answers } = data;
    // Use the existing avatar image or return the Gravatar for the email
    
    // The complete user
    const questionData = {
      text,
      category,
      userId,
      answers,      
    };
    
    // Call the original `create` method with existing `params` and new data
    return super.create(questionData, params);
  }  
*/