import React from 'react'
import { Image, Item } from 'semantic-ui-react'

const CardItem = ({avatar, questionId, answer, email, date}) => (
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
	    </Item.Extra>
      </Item.Content>
    </Item>
	<hr/>
   </Item.Group>
)

export default CardItem;

