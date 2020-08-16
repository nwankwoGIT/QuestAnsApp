import React, { Component } from 'react';
import Chat from './chat';
import client from './feathers';
import ShowTabs from './components/ShowTabs';
import { Route, Switch} from 'react-router-dom';

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
		login: null,
    questions: [],
    categories: [{id:1, value:'Programming'},
                 {id:2, value:'Technology'}, 
                 {id:3, value:'Politics'},
                 {id:4, value:'Science'},
                 {id:5, value:'Sports'},
                 {id:6, value:'Space Exploration'},
                ],
    answers: [],
		users: [],
	};
  }


  
  componentDidMount() {
    const questions = client.service('questions');
    const answers = client.service('answers');
    const users = client.service('users');

    // Try to authenticate with the JWT stored in localStorage
    client.authenticate().catch(() => this.setState({ login: null }));

    // On successfull login
    client.on('authenticated', login => {
      // Get all users and questions
      Promise.all([
        questions.find({
          query: {
            $sort: { createdAt: -1 },
            $limit: 25
          }
        }),
        answers.find({
          query: {
            $sort: { createdAt: -1 },
            $limit: 25
          }
        }),
        users.find()
      ]).then( ([ questionPage, answerPage, userPage ]) => {
        // We want the latest messages but in the reversed order
        const questions = questionPage.data.reverse();  
        const answers = answerPage.data.reverse(); 
        const users = userPage.data;

        // Once both return, update the state
        this.setState({ login, questions, answers, users });
      });
    });

    // On logout reset all all local state (which will then show the login screen)
    client.on('logout', () => this.setState({
      login: null,
      questions: null,
      answers: null,
      users: null
    }));

    // Add new messages to the message list
    questions.on('created', question => this.setState({
      questions: [...this.state.questions, question]
    }));

    // Add new answers to the message list
    answers.on('created', answer => this.setState({
      answers: [...this.state.answers, answer]
    }));

    // Add new users to the user list
    users.on('created', user => this.setState({
      users: [...this.state.users, user]
    }));
  }
  getUsers = async() => {    
    return await client.service('users')
      .find({})
      .then(function(doc) { 
       console.log(doc);       
       return doc;
    })  
  }
  render() {
    if(this.state.login === undefined) {
      return <main className="container text-center">
        <h1>App is Loading...</h1>
      </main>;
    } else if(this.state.login) {
      return <Chat  questions={this.state.questions} 
                    categories={this.state.categories}                    
                    answers={this.state.answers} 
                    users={this.state.users} /> 
      
    }

    return (
      <div>           
        <Switch>   
           <Route path='/'  component={ShowTabs} exact />                
        </Switch>      
      </div>
    )    
  }
}

export default Application;
