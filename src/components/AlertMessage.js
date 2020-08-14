import React from 'react'
import { Message, Icon } from 'semantic-ui-react'

const AlertMessage = ({msg}) => (
  <Message icon>
    <Icon name='circle notched' loading />
    <Message.Content>
      <Message.Header>Information</Message.Header>
            {msg}
    </Message.Content>
  </Message>
)

export default AlertMessage