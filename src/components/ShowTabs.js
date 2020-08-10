import _ from 'lodash'
import React, { Component } from 'react'
import Login from '../login'
import SignUp from '../signup'
import { Divider, Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
const colors = [
  'teal',
  'orange',
  'yellow',
  'olive',
  'green',
  'red',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
]

const panes = [
  {
    menuItem: 'Login',
    render: () => <Tab.Pane attached={false}><Login/></Tab.Pane>,
  },
  {
    menuItem: 'SignUp',
    render: () => <Tab.Pane attached={false}><SignUp/></Tab.Pane>,
  },
  {
    menuItem: 'Other',
    render: () => <Tab.Pane attached={false}>Tab Content</Tab.Pane>,
  },
]

class ShowTabs extends Component {
  state = { color: colors[0] }
  handleColorChange = (e) => this.setState({ color: e.target.value })
  render() {
    const { color } = this.state

    return (
      <div>
        {/*}
        <h3>Choose Menu Bar Color Preference</h3>
        <select onChange={this.handleColorChange}>
          {_.map(colors, (c) => (
            <option key={c} value={c}>
              {_.startCase(c)}
            </option>
          ))}
        </select>
          */}
        <Divider hidden />

        <Tab
          menu={{ color, inverted: true, attached: false, tabular: false }}
          panes={panes}
        />
      </div>
    )
  }
}

export default ShowTabs