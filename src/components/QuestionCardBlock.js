import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { now } from 'moment'
import client from '../feathers';
const QuestionCardBlock = ({question, questionId, avatar,category, count, email,date}) => {    
const createAnswer = async() => {   
    client.service('answers').create({text: "My fake dummy asnswer", questionId: questionId }).then(() => {
      console.log('created an answer');
  });
}  
return (
  <div>
  <Card>
    <Card.Content>
    <Card.Header>Question from : {" "} {email}</Card.Header>
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
                  <p>Question: {question} </p>
                  <p>Category: {category} </p>
                  <p>Answers: {count} </p>
                  <p>Date: {date} </p>
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

