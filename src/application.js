
/*
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheet/styles.css';
import { TodoHome } from './components/Adapted/TodoHome';
import { AddTodo } from './components/Adapted/AddTodo';
import { AddContact } from './components/Adapted/AddContact';
import { ContactList } from './components/Adapted/ContactList';
import { EditTodo } from './components/Adapted/EditTodo';
import { TodoALLList } from './components/Adapted/TodoALLList';
import { TodoActiveList } from './components/Adapted/TodoActiveList';
import { TodoCompletedList } from './components/Adapted/TodoCompletedList';
import { TodoGlobalProvider } from './context/TodoGlobalState';


const TodoApp = () => { 
  return (        
    <TodoGlobalProvider>
      <Switch>
        <Route path="/" component={TodoHome} exact />
        <Route path="/add" component={AddTodo} exact />  
        <Route path="/edit/:id" component={EditTodo} exact />  
        <Route path="/addcontact" component={AddContact} exact />  
        <Route path="/viewalltodos" component={TodoALLList} exact /> 
        <Route path="/viewcompletedtodos" component={TodoCompletedList} exact /> 
        <Route path="/viewactivetodos" component={TodoActiveList} exact /> 
        <Route path="/showcontacts" component={ContactList} exact />                         
      </Switch>
    </TodoGlobalProvider>    
 
  );
}

export default TodoApp;

*/



import React, { Component } from 'react';
import Login from './login';
import Chat from './chat';
import client from './feathers';
import ShowTabs from './components/ShowTabs';
import SignUpForm from './components/SignUpForm'
import NavBar2 from './components/NavBar2'

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
		login: null,
		questions: [],
		users: [],
	};
  }

  componentDidMount() {
    const questions = client.service('questions');
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
        users.find()
      ]).then( ([ questionPage, userPage ]) => {
        // We want the latest messages but in the reversed order
        const questions = questionPage.data.reverse();
        const users = userPage.data;

        // Once both return, update the state
        this.setState({ login, questions, users });
      });
    });

    // On logout reset all all local state (which will then show the login screen)
    client.on('logout', () => this.setState({
      login: null,
      questions: null,
      users: null
    }));

    // Add new messages to the message list
    questions.on('created', question => this.setState({
      questions: [...this.state.questions, question]
    }));

    // Add new users to the user list
    users.on('created', user => this.setState({
      users: [...this.state.users, user]
    }));
  }

  render() {
    if(this.state.login === undefined) {
      return <main className="container text-center">
        <h1>Loading...</h1>
      </main>;
    } else if(this.state.login) {
      return <Chat questions={this.state.questions} users={this.state.users} /> 
      
    }

    return (
      <div> 
        <NavBar2/>
        <ShowTabs/>
        <Login />
      </div>
    )
  }
}

export default Application;
