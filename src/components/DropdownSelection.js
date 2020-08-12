import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const Categories = [
  {
    key: 'Tecnology',
    text: 'Tecnology',
    value: 'Tecnology',
    
  },
  {
    key: 'Science',
    text: 'Science',
    value: 'Science',
    
  },  
]

const DropdownSelection = () => (
  <Dropdown
    placeholder='Select Question Category to display'
    fluid
    selection
    options={Categories}
  />
)

export default DropdownSelection