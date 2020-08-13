import React from 'react';
import ReactDOM from 'react-dom';
import c3 from 'c3';
export default class Chart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ]
      }
    });
  }

  render() {
    return (
      <div ref="chart"></div>
    );
  }
}