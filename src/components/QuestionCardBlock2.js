import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
const QuestionCardBlock2 = ({question, questionId, avatar,category, count, email,date}) => {
  const styles = {
    makeitbold: {
      fontWeight: "bold",
    },
    makeitboldTeal: {
      fontWeight: "bold",
      color: 'teal',
      fontSize: '14px'
    },
    makeitboldRed: {
      fontWeight: "bold",
      fontSize: '18px',
      color:"white",
      backgroundColor: 'red',
      paddingLeft: '20px'
    }
  }
return (  
  <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
	      size='mini' 
	      src={avatar}
        />
        <Card.Header> Categorgy: {category}</Card.Header>
        <Card.Meta>{questionId}</Card.Meta>
        <Card.Description>
          <div>
              <p style={styles.makeitboldTeal}>{question} </p>
              <p>Category: &nbsp;&nbsp; {category} </p>
              <p>Responses: &nbsp;&nbsp; {count} </p>
              <p>Date: &nbsp;&nbsp; {date} </p>
              {/*<button className="ui facebook button">Click to Respond</button>                     
              <button className="ui facebook button" type="button" onClick={() => createAnswer()}>Submit Your Answer</button> */}                    
          </div>   
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