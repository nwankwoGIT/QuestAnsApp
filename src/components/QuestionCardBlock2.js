import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const QuestionCardBlock2 = ({question, questionId, avatar,category, count, email,date}) => {
const sendAnswerMessage = (ev) => {    
  
}
return (  
  <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
	      size='mini' 
	      src= {avatar}
        />
        <Card.Header> Categorgy: {category}</Card.Header>
        <Card.Meta>{questionId}</Card.Meta>
        <Card.Description>
            <p><strong>{question}</strong></p>
            <p>No. of responses: {count} </p>
            <p>Date: {date} </p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
		<p>Use the pad to the right to submit your response </p>
        
      </Card.Content>
    </Card>
  </Card.Group>
)
}
export default QuestionCardBlock2 

/*
      <Card.Content extra>
		<p>Use the pad to the right to submit your response </p>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Click to Respond
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
*/