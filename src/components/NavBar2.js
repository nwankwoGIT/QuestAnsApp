import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import client from '../feathers';

const colorsA = ['red', 'orange', 'yellow', 'olive', 'green', 'teal']
const colorsB = ['blue', 'violet', 'purple', 'pink', 'brown', 'grey']

export default class MenuExampleColoredInverted extends Component {
  state = { activeA: colorsA[0], activeB: colorsB[0] }

  //handleAClick = (e, { name }) => this.setState({ activeA: name })  
   handleAClick = (e, { name })  => {
   this.setState({ activeA: name })    
   if(name === 'red') {
      client.logout()
    }
  }
  

  render() {
    const { activeA, activeB } = this.state
    return (
      <div>
        <Menu inverted>
          {colorsA.map((c) => (
            <Menu.Item
              key={c}
              name={c}
              active={activeA === c}
              color={c}
              onClick={this.handleAClick}  // onClick={() => client.logout()} 
            />
          ))}
        </Menu>        
      </div>
    )
  }
}