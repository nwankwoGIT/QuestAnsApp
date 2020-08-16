import React, { Component } from 'react'
import client from '../feathers';
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import ModalUsersBox from './ModalUsersBox'
import ModalQuestionByCategory from './ModalQuestionByCategory'
const menu = ['Users', 'Questions', 'Answers']
const colorsA = ['red', 'orange', 'olive']
const categories = ['Programming','Technology ','Politics','Science','Sports','Space Exploration'];


export default class NavMenu extends Component {
  state = { activeA: colorsA[0]}
  //handleAClick = (e, { name }) => this.setState({ activeA: name })  
   handleAClick = (e, { name })  => {
   this.setState({ activeA: name })    
   if(name === 'Users') {
      window.alert("place holder for users object to the console");
      //this.getUsers()
    }
    else if(name === 'Questions') {
      window.alert("place holder for questions database object to the console");
       //this.getQuestions()
     }
    else if(name === 'Answers') {
      window.alert("place holder for answers object to the console");
        //this.getAnswers()
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
    const { activeA } = this.state
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
              <Dropdown.Item> 
               <Menu.Item>
                <ModalQuestionByCategory questions={this.props.questions} categoryToDisplay={categories[0]}/>                  
                </Menu.Item>
              </Dropdown.Item>
              <Dropdown.Item> 
                <Menu.Item>
                  <ModalQuestionByCategory questions={this.props.questions} categoryToDisplay={categories[1]}/>   
                </Menu.Item>
              </Dropdown.Item>                             
                <Dropdown.Item> 
                   <Menu.Item>
                    <ModalQuestionByCategory questions={this.props.questions} categoryToDisplay={categories[2]}/>    
                   </Menu.Item>
              </Dropdown.Item>              
		          <Dropdown.Item> 
              <Menu.Item>
                <ModalQuestionByCategory questions={this.props.questions} categoryToDisplay={categories[3]}/>  
                </Menu.Item>
              </Dropdown.Item>
              <Dropdown.Item> 
                <Menu.Item>
                  <ModalQuestionByCategory questions={this.props.questions} categoryToDisplay={categories[4]}/>  
                </Menu.Item>
              </Dropdown.Item>
		          <Dropdown.Item> 
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

       