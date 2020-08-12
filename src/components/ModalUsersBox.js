import React, { useState} from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
// create a modal box 
import {ChatUsersStatistics} from './ChatUsersStatisticsTable'
const ModalUsersBox = ({users}) => {
 const [open, setOpen] = useState(false)  
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button className="ui blue button">Display Users</Button>}
    >
      <Modal.Header>Users Details</Modal.Header>
      <Modal.Content image>
        <Image size='tiny' src='https://react.semantic-ui.com/images/avatar/small/rachel.png' wrapped />        
		<ChatUsersStatistics users={users} />
      </Modal.Content>
      <Modal.Actions>
		
        <Button 
		  color='black' 
		  onClick={() => setOpen(false)}>
          Cancel
        </Button>
		
        <Button
          content="Ok"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />        
      </Modal.Actions>
    </Modal>
  )
}
export default ModalUsersBox