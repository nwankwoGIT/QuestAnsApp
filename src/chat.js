import React, { Component } from 'react';
import moment from 'moment';
import client from './feathers';
import NavBar2 from './components/NavBar2'
//import {Table, Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
//import QuestionCardBlock from './components/QuestionCardBlock'
import QuestionCardBlock2 from './components/QuestionCardBlock2'
//import AnswerCardBlock from './components/AnswerCardBlock'
import CardItem from './components/CardItem'
import { Button, TextArea, Form } from 'semantic-ui-react'
//import { Button, Form, Row, Col} from 'react-bootstrap';
//import ModalQuestionsBox from './components/ModalQuestionsBox'

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {     
  	};
  }
  sendMessage(ev) {
    const input = ev.target.querySelector('[name="text"]');
    const input2 = ev.target.querySelector('[name="category"]');
    const text = input.value;
    const category = input2.value;
    this.setState({currentCategory: category});
    if((text) && (category)){
      client.service('questions').create({ text, category }).then(() => {
        input.value = '';
      });
    }
    ev.preventDefault();
  }

  async sendAnswerMessage(ev) {    
    const answerinput = ev.target.querySelector('[name="answertext"]');
    const questionid = ev.target.querySelector('[name="questionId"]');
    const text = answerinput.value;
    const questionId = questionid.value;

    if((text) && (questionId)){
      await client.service('answers').create({ text, questionId }).then(() => {
      this.updateQuestionAnswerArray(questionId, text);        
                           
      });
      ev.preventDefault(); 
      answerinput.value = '';  
    }    
       
    window.location.reload(false);  // trigger entire page reload to update the answer array of the question 

  }

  refreshPage(){ 
    window.location.reload(false);  // trigger entire page reload to update the answer array of the question 
}
  scrollToBottom() {
    const chat = this.chat;
    chat.scrollTop = chat.scrollHeight - chat.clientHeight;
  }

  componentDidMount() {    
    this.scrollToBottom = this.scrollToBottom.bind(this);
    client.service('questions').on('created', this.scrollToBottom);
    client.service('answers').on('created', this.scrollToBottom);    
    this.scrollToBottom();
  }

  componentWillUpdate() {
    // 
    
  }
  componentWillUnmount() {
    // Clean up listeners
    client.service('questions').removeListener('created', this.scrollToBottom);	
    client.service('answers').removeListener('created', this.scrollToBottom);	
  }

// various query API's
  getUsers = async() => {    
    return await client.service('users')
      .find({})
      .then(function(doc) { 
       console.log(doc);       
       return doc;
    })  
  }
 
  getQuestions = async() => {    
    return await client.service('questions')
      .find({})
      .then(function(doc) { 
       console.log(doc);       
       return doc;
    })  
  }
  getAnswers = async() => {    
    return await client.service('answers')
      .find({})
      .then(function(doc) { 
       console.log(doc);       
       return doc;
    })  
  }
  
  getAnswersFromOneQuestion = async(questionId) => {    
    return await client.service('questions')
      .get({_id:questionId})
      .then(function(doc) { 
       console.log(doc);       
       return doc.answers;
    })  
  }


  // returns the removed recod 
  removeAnswer = async(id) => {    
    return await client.service('answers')
      .remove({_id:id})
      .then(function(doc) { 
       console.log(doc);       
       return doc;
    })  
  }

  getAnswers = async() => {    
    return await client.service('answers')
      .find({})
      .then(function(doc) { 
       console.log(doc);       
       return doc;
    })  
  }

  removeQuestion = async(questionId) => {    
    return await client.service('questions')
      .remove({_id: questionId})
      .then(function(doc) { 
         
       console.log(doc);       
       return doc;
    })  
  }

  deleteAnAnswer = async(answerObj) => {    
    await client.service('answers').remove({_id: answerObj._id});  
    await client.service('questions').update({_id: answerObj.questionId },{ $pull: { answers: { $in: [ answerObj.text ] }}},
      { multi: false }
    )
  }


  updateQuestionAnswerArray = async (questionId, answer) => {
   const fromDb = await client.service('questions').get({_id: questionId});      
   await fromDb.answers.push(answer);    
   await client.service('questions').patch({_id:questionId}, {answers: fromDb.answers});      
}



deleteAnswer = async(answer, answerId, questionId) => {    
  await client.service('answers').remove({_id: answerId});
  await client.service('questions').get({_id: questionId})    
    .then(function(doc) { 
      for( var i = 0; i < doc.answers.length; i++)
       { 
         if ( doc.answers[i] === answer) 
        { doc.answers.splice(i, 1); }
      }  
      console.log(doc.answers)      
      //const answersToKeep = doc.answers.filter(answer => answer !== answerObj.text)
      client.service('questions').patch({_id:questionId}, {answers: doc.answers});            
      
    }); 
   window.location.reload(false);
}


// ================================================
  render() {    
    const { users, questions, categories, answers } = this.props;    
	// specify your styles here 
	const styles = {
		makeitbold: {
			fontWeight: "bold",
    },
    makeitboldTeal: {
      fontWeight: "bold",
      color: 'teal',
      fontSize: '20px'
    },
    makeitboldRed: {
      fontWeight: "bold",
      fontSize: '18px',
      color:"white",
      backgroundColor: 'red',
      paddingLeft: '20px'
		}
  }
  
    return <main className="flex flex-column">      
      <header className="title-bar flex flex-row flex-center">
        <div className="title-wrapper block center-element">
		{/*<img className="logo" src="http://feathersjs.com/img/feathers-logo-wide.png"
		alt="Feathers Logo" /> */}
       <span className="title" style={styles.makeitboldTeal}>Questions And Answers App</span>
        </div>
      </header>        
      <NavBar2 users={users} questions={questions}/>    
      <div className="flex flex-row flex-1 clear">
        <aside className="sidebar col col-3 flex flex-column flex-space-between">
          <header className="flex flex-row flex-center">
            <h4 className="font-300 text-center">
              <span className="font-600 online-count">{users.length}</span> users are logged in 
            </h4>
          </header>

          <ul className="flex flex-column flex-1 list-unstyled user-list">
            {users.map(user => <li key={user._id}>
              <a className="block relative" href="/logout">
                <img src={user.avatar} alt={user.email} className="avatar" />
                <span className="absolute username">{user.email}</span>
              </a>
            </li>)}
          </ul>             
          <footer className="flex flex-row flex-center">
            <a href="/" onClick={() => client.logout()} className="ui green button">
              Sign Out
            </a>
          </footer>
        </aside>

        <div className="flex flex-column col col-9">
        <header className="title-bar flex flex-row flex-center">
            <div className="title-wrapper block center-element">
        {/*<img className="logo" src="http://feathersjs.com/img/feathers-logo-wide.png"
        alt="Feathers Logo" /> */}
          <span className="title" style={styles.makeitboldTeal}>Questions Gallery</span>
            </div>
          </header>
          <main className="chat flex flex-column flex-1 clear" ref={main => { this.chat = main; }}>
            {questions.map(question =>  <div key={question._id} className="question flex flex-row">              
              <div className="question-wrapper">                                    
               <QuestionCardBlock2 avatar={question.user.avatar} 
                                  question={question.text} 
                                  questionId={question._id} 
                                  category={question.category} 
                                  count={question.answers.length}                                
                                  email={question.user.email}                                   
                                  date={moment(question.createdAt).format('MMM Do, hh:mm:ss')} />
                            
              </div>
			 			  		  
              <form onSubmit={this.sendAnswerMessage.bind(this)} style={{flexBasis: '100%'}} className="flex flex-column flex-space-between" id="send-response-message">                      
               <input type="text" name="questionId" value={question._id}  className="flex flex-1" hidden readOnly />  
			         <textarea name="answertext"  placeholder="Type in your answer to this question id here"  className="flex flex-1"  rows="4" cols="50"></textarea>				               
               {/*<input type="text" name="answertext"  placeholder="Type in your answer here"  className="flex flex-1" />   */}                           
               <button className="ui teal button flex flex-0" type="submit">Submit Answer</button>               
              </form> 	    
            </div> )}   
          </main>
          <div className="flex flex-column flex-space-between" >
             <hr style={{heigth:"10px", background:"red"}} /> 
          </div> 
          <Form onSubmit={this.sendMessage.bind(this)} className="flex flex-column flex-space-between" id="send-message">            
			    <label style={styles.makeitboldTeal}>Select Category For Question:</label>         
          	<select name="category" className="flex flex-1" id="category">
           		{categories.map(category =>
             	   <option key={category.id} value={category.value}>{category.value}</option>
           	 )} 
          	</select>              
            {/*	<input type="text" name="text" placeholder="Select category from drop down above and type in your question here" className="flex flex-1" /> */}
            <TextArea name="text" placeholder='Select category from drop down above and type in your question here' />
            <button className="ui teal button" type="submit">Submit Question</button>            
          </Form>       
        </div>
        <div className="flex flex-column col col-9">
        <header className="title-bar flex flex-row flex-center">
          <div className="title-wrapper block center-element">        
          <span className="title" style={styles.makeitboldTeal}>Answers Gallery</span>
            </div>
          </header>                            
            <main className="chat flex flex-column flex-1 clear" ref={main => { this.chat = main; }}>
            {answers.map(answer => <div key={answer._id} className="question flex flex-row">              
              <div className="question-wrapper">                        
              <CardItem avatar={answer.user.avatar} 
                                  questionId={answer.questionId} 
                                  answerId={answer._id} 
                                  answer={answer.text} 
                                  email={answer.user.email} 
                                  date={moment(answer.createdAt).format('MMM Do, hh:mm:ss')} /> 
              </div>
            </div>)}                   
          </main>             
        </div>
      </div>
	  <br/>
      {/* <Button className="ui black button" type="button" onClick={() => this.deleteAnAnswerFromQuestionAnswerArray("my answer ")}>get users</Button>   */}  
      <Button className="ui black button" type="button"> <p>&copy; 2020 &nbsp;&nbsp; www.kelecitex.com</p></Button>   
      <br/>  
      <hr/>    
    </main>;    

  }
}

export default Chat;
