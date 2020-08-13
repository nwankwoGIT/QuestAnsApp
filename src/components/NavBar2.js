import React, { Component } from 'react'
import client from '../feathers';
import { Button, Dropdown, Menu, Message } from 'semantic-ui-react'
import ModalUsersBox from './ModalUsersBox'
import ModalQuestionByCategory from './ModalQuestionByCategory'
const menu = ['fetchUsers', 'fetchQuestions', 'fetchAnswers', 'deleteQuestions', 'deleteAnswers']
const colorsA = ['green', 'orange', 'yellow', 'red','olive']
const colorsB = ['blue', 'violet', 'purple', 'pink', 'brown', 'grey']
const categories = ['Programming','Technology','Politics','Science','Sports','Space Exploration'];
export default class MenuExampleColoredInverted extends Component {
  state = { activeA: colorsA[0], activeB: colorsB[0] }

  //handleAClick = (e, { name }) => this.setState({ activeA: name })  
   handleAClick = (e, { name })  => {
   this.setState({ activeA: name })    
   if(name === 'fetchUsers') {
      window.alert("Json response users data sent to the console");
      //this.getUsers()
    }
    else if(name === 'fetchQuestions') {
      window.alert("Json response questions data sent to the console");
       //this.getQuestions()
     }
    else if(name === 'fetchAnswers') {
      window.alert("Json response answers data sent to the console");
        //this.getAnswers()
      } 
	 else{
	  	
	  }  
  }
  
  showMessage = () => {
    return (
      <Message
          header='Changes in Service'
          content='We updated our privacy policy here to better service our customers. We recommend reviewing the changes.'
      />
    )
  }
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

  render() {
    const { activeA, activeB } = this.state
    return (
      <div>
        <Menu inverted>
          {colorsA.map((c, index) => (
            <Menu.Item
              key={c}
              name={menu[index]}
              active={activeA === menu[index]}
              color={c}
              onClick={this.handleAClick}  // onClick={() => client.logout()} 
            />
			  
          ))}
        <Menu.Menu position='right'>
          <Dropdown item text='Categories'>
            <Dropdown.Menu>
              <Dropdown.Item>  {categories[0]}
               <Menu.Item>
                <ModalQuestionByCategory questions={this.props.questions} categoryToDisplay={categories[0]}/>  
                </Menu.Item>
              </Dropdown.Item>
              <Dropdown.Item> {categories[1]}
                <Menu.Item>
                  <ModalQuestionByCategory questions={this.props.questions} categoryToDisplay={categories[1]}/>   
                </Menu.Item>
              </Dropdown.Item>                             
                <Dropdown.Item> {categories[2]}
                   <Menu.Item>
                    <ModalQuestionByCategory questions={this.props.questions} categoryToDisplay={categories[2]}/>    
                   </Menu.Item>
              </Dropdown.Item>              
		          <Dropdown.Item> {categories[3]}
              <Menu.Item>
                <ModalQuestionByCategory questions={this.props.questions} categoryToDisplay={categories[3]}/>  
                </Menu.Item>
              </Dropdown.Item>
              <Dropdown.Item> {categories[4]}
                <Menu.Item>
                  <ModalQuestionByCategory questions={this.props.questions} categoryToDisplay={categories[4]}/>  
                </Menu.Item>
              </Dropdown.Item>
		          <Dropdown.Item> {categories[5]}
                <Menu.Item>
                  <ModalQuestionByCategory questions={this.props.questions} categoryToDisplay={categories[5]}/>    
                </Menu.Item>
              </Dropdown.Item>		          
		          <Dropdown.Item>Nope - Spare</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary onClick={() => client.logout()}>Sign Out</Button>
          </Menu.Item>
          <Menu.Item>            
            <ModalUsersBox users={this.props.users} />
          </Menu.Item>
        </Menu.Menu>
		  
		  
        </Menu>   
		       
      </div>
    )
  }
}

       