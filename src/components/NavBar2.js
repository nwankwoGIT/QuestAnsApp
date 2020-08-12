import React, { Component } from 'react'
import client from '../feathers';
import { Button, Dropdown, Menu } from 'semantic-ui-react'
const menu = ['fetchUsers', 'fetchQuestions', 'fetchAnswers', 'deleteQuestions', 'deleteAnswers']
const colorsA = ['green', 'orange', 'yellow', 'red','olive']
const colorsB = ['blue', 'violet', 'purple', 'pink', 'brown', 'grey']

export default class MenuExampleColoredInverted extends Component {
  state = { activeA: colorsA[0], activeB: colorsB[0] }

  //handleAClick = (e, { name }) => this.setState({ activeA: name })  
   handleAClick = (e, { name })  => {
   this.setState({ activeA: name })    
   if(name === 'fetchUsers') {
      this.getUsers()
    }
    else if(name === 'fetchQuestions') {
       this.getQuestions()
     }
    else if(name === 'fetchAnswers') {
        this.getAnswers()
      } 
	 else{
	  	
	  }  
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
              <Dropdown.Item>Programming</Dropdown.Item>
              <Dropdown.Item>Science</Dropdown.Item>
              <Dropdown.Item>Politics</Dropdown.Item>
		      <Dropdown.Item>Space Exploration</Dropdown.Item>
		      <Dropdown.Item>Technology</Dropdown.Item>
		      <Dropdown.Item>Politics</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary onClick={() => client.logout()}>Sign Out</Button>
          </Menu.Item>
        </Menu.Menu>
		  
		  
        </Menu>   
		       
      </div>
    )
  }
}

       