import React, { useEffect } from 'react'
import { Card, Feed } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
//import { now } from 'moment'
import client from '../feathers';


const QuestionCardBlock = ({question, questionId, avatar,category, count, email,date}) => {  
const createAnswer = async() => {   
    client.service('answers').create({text: "My fake dummy asnswer", questionId: questionId }).then(() => {
      console.log('created an answer');
  });
}  
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

useEffect(() => {   
  
}, [])

return (
  <div>
  <Card>
    <Card.Content>
    <Card.Header>Submitted by : &nbsp;&nbsp; {email}</Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Label image={avatar} />
              <Feed.Content>
                <h4>Question Id: </h4>
                <Feed.Date content={questionId} />
                <Feed.Summary>
                  <div>
                  <p style={styles.makeitboldTeal}>{question} </p>
                  <p>Category: &nbsp;&nbsp; {category} </p>
                  <p>Responses: &nbsp;&nbsp; {count} </p>
                  <p>Date: &nbsp;&nbsp; {date} </p>
                  {/*<button className="ui facebook button">Click to Respond</button>                     
                  <button className="ui facebook button" type="button" onClick={() => createAnswer()}>Submit Your Answer</button> */}                    
                  </div>                  
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>       
          </Feed>          
        </Card.Content>        
  </Card>  
  </div>
)
}
export default QuestionCardBlock

