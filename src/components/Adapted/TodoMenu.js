import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {NavDropdown} from 'react-bootstrap'
import { TodoGlobalProvider } from '../../context/TodoGlobalState';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { NavLink,  Link  } from 'react-router-dom';
import { LinkContainer} from 'react-router-bootstrap'

const TodoMenu = () => {
  
  return(
  <>
  <TodoGlobalProvider>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">        
        <LinkContainer to="/"> 
           <Nav.Link>Home</Nav.Link>
        </LinkContainer>    
        <NavDropdown title="Contact SubMenu" id="collasible-nav-dropdown0">  
          <LinkContainer to="/addcontact">
              <NavDropdown.Item>Add New Contact</NavDropdown.Item>   
          </LinkContainer>  
          <LinkContainer to="/showcontacts">
              <NavDropdown.Item>Show Contacts</NavDropdown.Item>   
          </LinkContainer>            
        </NavDropdown>
        <NavDropdown title="Todo SubMenu" id="collasible-nav-dropdown">                    
          <LinkContainer to="/add">
            <NavDropdown.Item>Add New Todo</NavDropdown.Item>   
           </LinkContainer>  
           <LinkContainer to="/edit/1">
             <NavDropdown.Item>Edit TodoItem 1</NavDropdown.Item>   
           </LinkContainer> 
           <NavDropdown.Divider />           
           <LinkContainer to="/viewalltodos">             
             <NavDropdown.Item>All Todos</NavDropdown.Item>  
           </LinkContainer>
           <LinkContainer to="/viewcompletedtodos">             
             <NavDropdown.Item>Completed Todos</NavDropdown.Item>  
           </LinkContainer>
           <LinkContainer to="/viewactivetodos">             
             <NavDropdown.Item>Active Todos</NavDropdown.Item>  
           </LinkContainer>            
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Other links</NavDropdown.Item>          
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </TodoGlobalProvider>
   </> 
   )
  }
  
  export default TodoMenu;
  

