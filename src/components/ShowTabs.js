import React from 'react'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const ShowTabs = () => <Tab panes={panes} />
export default ShowTabs
