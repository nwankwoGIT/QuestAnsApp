import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
const AnswerCardBlock = ({avatar, answer, questionId, email,date}) => (
  <Card>
    <Card.Content>
    <Card.Header>Submitted by : {" "} {email}</Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Label image={avatar} />
              <Feed.Content>
                <h4>Link Question Id</h4>
                <Feed.Date content={questionId}/>
                <Feed.Summary>
                  <div>                      
                  <p>Answer: {answer} </p>                  
                  <p>Date: {date} </p>                               
                  </div>
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>       
          </Feed>
        </Card.Content>
  </Card>
)

export default AnswerCardBlock