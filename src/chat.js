import React, { Component } from 'react';
import moment from 'moment';
import client from './feathers';
import NavBar2 from './components/NavBar2'
//import GoogleHeader from './components/GoogleHeader';
//import 'bootstrap/dist/css/bootstrap.min.css';

class Chat extends Component {
  sendMessage(ev) {
    const input = ev.target.querySelector('[name="text"]');
    const text = input.value;

    if(text) {
      client.service('questions').create({ text }).then(() => {
        input.value = '';
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
    this.scrollToBottom();
  }

  componentWillUnmount() {
    // Clean up listeners
    client.service('questions').removeListener('created', this.scrollToBottom);	
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
    const { users, questions } = this.props;
	// specify your styles here 
	const styles = {
		makeitbold: {
			fontWeight: "bold",
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
            <a href="#" onClick={() => client.logout()} className="button button-primary">
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
              <img src={question.user.avatar} alt={question.user.email} className="avatar" />
              <div className="question-wrapper">
                <p className="question-header">
                  <span className="username font-600">{question.user.email}</span>
                  <span className="sent-date font-300">{moment(question.createdAt).format('MMM Do, hh:mm:ss')}</span>
                </p>
                <p className="question-content font-300">{question.text}</p>
              </div>
            </div>)}
          </main>
          <form onSubmit={this.sendMessage.bind(this)} className="flex flex-row flex-space-between" id="send-message">
            <input type="text" name="text" className="flex flex-1" />
            <button className="button-primary" type="submit">Send</button>            
          </form>       
        </div>





        <div className="flex flex-column col col-9">


        <header className="title-bar flex flex-row flex-center">
            <div className="title-wrapper block center-element">
        {/*<img className="logo" src="http://feathersjs.com/img/feathers-logo-wide.png"
        alt="Feathers Logo" /> */}
          <span className="title" style={styles.makeitbold}>List Of Answers Provided</span>
            </div>
          </header>


          <main className="chat flex flex-column flex-1 clear" ref={main => { this.chat = main; }}>            
            {questions.map(question => <div key={question._id} className="question flex flex-row">
              <img src={question.user.avatar} alt={question.user.email} className="avatar" />
              <div className="question-wrapper">
                <p className="question-header">
                  <span className="username font-600">{question.user.email}</span>
                  <span className="sent-date font-300">{moment(question.createdAt).format('MMM Do, hh:mm:ss')}</span>
                </p>
                <p className="question-content font-300">{question.text}</p>
              </div>
            </div>)}
          </main>
          <form onSubmit={this.sendMessage.bind(this)} className="flex flex-row flex-space-between" id="send-message">
            <input type="text" name="text" className="flex flex-1" />
            <button className="button-primary" type="submit">Send</button>            
          </form>       
        </div>





      </div>
      <button className="button-primary" type="button" onClick={() => this.getUsers()}>get users</button> 
    </main>;  
  }
}

export default Chat;

 