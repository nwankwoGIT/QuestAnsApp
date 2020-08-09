import React, { Component } from 'react';
import moment from 'moment';
import client from './feathers';
import NavBar2 from './components/NavBar2'
import 'semantic-ui-css/semantic.min.css'
import QuestionCardBlock from './components/QuestionCardBlock'
import AnswerCardBlock from './components/AnswerCardBlock'

class Chat extends Component {
  sendMessage(ev) {
    const input = ev.target.querySelector('[name="text"]');
    const input2 = ev.target.querySelector('[name="category"]');
    const text = input.value;
    const category = input2.value;

    if((text) && (category)){
      client.service('questions').create({ text, category }).then(() => {
        input.value = '';

      });
    }
    ev.preventDefault();
  }

  sendAnswerMessage(ev) {    
    const answerinput = ev.target.querySelector('[name="answertext"]');
    const questionid = ev.target.querySelector('[name="questionId"]');
    const text = answerinput.value;
    const questionId = questionid.value;

    if((text) && (questionId)){
      client.service('answers').create({ text, questionId }).then(() => {
      answerinput.value = '';      
      });
    }
    ev.preventDefault();
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

  componentWillUnmount() {
    // Clean up listeners
    client.service('questions').removeListener('created', this.scrollToBottom);	
    client.service('answers').removeListener('created', this.scrollToBottom);	
  }

// various query API's
  getUsers = () => {    
    return client.service('users')
      .find({})
      .then(function(doc) { 
       console.log(doc);       
       return doc;
    })  
  }
 
  getQuestions = () => {    
    return client.service('questions')
      .find({})
      .then(function(doc) { 
       console.log(doc);       
       return doc;
    })  
  }
  getAnswers = () => {    
    return client.service('answers')
      .find({})
      .then(function(doc) { 
       console.log(doc);       
       return doc;
    })  
  }
  
// ================================================
  render() {
    const { users, questions, categories, answers } = this.props;
	// specify your styles here 
	const styles = {
		makeitbold: {
			fontWeight: "bold",
    },
    makeitboldRed: {
      fontWeight: "bold",
      color:"red"
		}
  }
  
    return <main className="flex flex-column">      
      <header className="title-bar flex flex-row flex-center">
        <div className="title-wrapper block center-element">
		{/*<img className="logo" src="http://feathersjs.com/img/feathers-logo-wide.png"
		alt="Feathers Logo" /> */}
       <span className="title" style={styles.makeitbold}>Questions And Answers App</span>
        </div>
      </header>
      <NavBar2/>    
      <div className="flex flex-row flex-1 clear">
        <aside className="sidebar col col-3 flex flex-column flex-space-between">
          <header className="flex flex-row flex-center">
            <h4 className="font-300 text-center">
              <span className="font-600 online-count">{users.length}</span> users
            </h4>
          </header>

          <ul className="flex flex-column flex-1 list-unstyled user-list">
            {users.map(user => <li key={user._id}>
              <a className="block relative" href="#">
                <img src={user.avatar} alt={user.email} className="avatar" />
                <span className="absolute username">{user.email}</span>
              </a>
            </li>)}
          </ul>
          <footer className="flex flex-row flex-center">
            <a href="#" onClick={() => client.logout()} className="ui red button">
              Sign Out
            </a>
          </footer>
        </aside>


        <div className="flex flex-column col col-9">
        <header className="title-bar flex flex-row flex-center">
            <div className="title-wrapper block center-element">
        {/*<img className="logo" src="http://feathersjs.com/img/feathers-logo-wide.png"
        alt="Feathers Logo" /> */}
          <span className="title" style={styles.makeitbold}>List Of Questions Posed</span>
            </div>
          </header>
          <main className="chat flex flex-column flex-1 clear" ref={main => { this.chat = main; }}>
            {questions.map(question => <div key={question._id} className="question flex flex-row">              
              <div className="question-wrapper">                        
               <QuestionCardBlock avatar={question.user.avatar} 
                                  question={question.text} 
                                  questionId={question._id} 
                                  category={question.category} 
                                  count={question.answers.length}                                
                                  email={question.user.email} 

                                  date={moment(question.createdAt).format('MMM Do, hh:mm:ss')} />
                            
              </div>
              <form onSubmit={this.sendAnswerMessage.bind(this)} className="flex flex-row flex-space-between" id="send-response-message">          
               <input type="text" name="questionId" value={question._id}  className="flex flex-1" hidden readOnly />
               <input type="text" name="answertext" placeholder="Type in your answer here"  className="flex flex-1" />              
               <button className="ui teal button" type="submit">Submit Answer</button>
              </form>  
            </div> )}    
            
          </main>
          <div> 
          <h4 style={styles.makeitboldRed}>Selection Question Category</h4> 
          </div>
          <form onSubmit={this.sendMessage.bind(this)} className="flex flex-row flex-space-between" id="send-message">             
          <select name="category" className="flex flex-1" id="category">
           {categories.map(category =>
             <option key={category.id} value={category.value}>{category.value}</option>
           )} 
          </select>            
          <input type="text" name="text" className="flex flex-1" />
            <button className="ui teal button" type="submit">Submit Question</button>            
          </form>       
        </div>
        <div className="flex flex-column col col-9">
        <header className="title-bar flex flex-row flex-center">
          <div className="title-wrapper block center-element">        
          <span className="title" style={styles.makeitbold}>List Of Answers Provided</span>
            </div>
          </header>                            
            <main className="chat flex flex-column flex-1 clear" ref={main => { this.chat = main; }}>
            {answers.map(answer => <div key={answer._id} className="question flex flex-row">              
              <div className="question-wrapper">                        
              <AnswerCardBlock avatar={answer.user.avatar} 
                                  questionId={answer.questionId} 
                                  answer={answer.text} 
                                  email={answer.user.email} 
                                  date={moment(answer.createdAt).format('MMM Do, hh:mm:ss')} />                                                 
              </div>
            </div>)}                   
          </main>             
        </div>
      </div>
      <button className="button-dander" type="button" onClick={() => this.getUsers()}>get users</button>     
    </main>;      
  }
}

export default Chat;
/*
<form onSubmit={this.sendAnswerMessage.bind(this)} className="flex flex-row flex-space-between" id="send-answermessage">
<select name="questionid" className="flex flex-1" id="questionid">
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
    <option value="">4</option>
  </select>
  <input type="text" name="answertext" className="flex flex-1" />
  <button className="button-primary" type="submit">Submit Answer</button>            
</form>  
*/ 