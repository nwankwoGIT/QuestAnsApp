import React from 'react'
import { Image, Button, Item } from 'semantic-ui-react'
import client from '../feathers';

const CardItem = ({avatar, questionId, answerId, answer, email, date}) => {
const deleteAnswer = async() => { 
    let r = window.confirm("Do you want to delete this answer ?");
    if (r === true) {        
    await client.service('answers').remove({_id: answerId});
    let obj = await client.service('questions').get({_id: questionId});
    const answersToKeep = await obj.answers.filter(item => item !== answer);
    await client.service('questions').patch({_id:questionId}, {answers: answersToKeep});   
    window.location.reload(false);
    }

  }
  
  return (
  <Item.Group>
    <Item>
      <Item.Image size='mini' src={avatar} />
      <Item.Content>
        <Item.Header as='a'>From: {email}</Item.Header>
        <Item.Meta></Item.Meta>
        <Item.Description>
	      <p>{answer}</p>
	  	  <p> Response to Question ID: {questionId}</p>
	      <p>Posted on: {date} </p>
        </Item.Description>
        <Item.Extra>
	      Additional Details : <p>Posted on: {date} </p>
        <Button
          content="Delete"
          labelPosition='right'
          icon='checkmark'
          onClick={() => deleteAnswer()}
          positive
        />   
	    </Item.Extra>
      </Item.Content>
    </Item>
	<hr/>
   </Item.Group>
)
}
export default CardItem;

