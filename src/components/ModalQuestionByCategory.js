import React, { useState} from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
// create a modal box 
import {ChatStatistics} from './ChatStatisticsTable'

const ModalQuestionByCategory= ({questions, categoryToDisplay}) => {
 const [open, setOpen] = useState(false)  

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button className="ui blue button">{categoryToDisplay}</Button>}
    >
      <Modal.Header>Category:&nbsp;&nbsp; {categoryToDisplay}</Modal.Header>
      <Modal.Content image>
        <Image size='tiny' src='https://react.semantic-ui.com/images/avatar/small/rachel.png' wrapped />        
		<ChatStatistics questions={questions} categoryToDisplay={categoryToDisplay} />
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
export default ModalQuestionByCategory