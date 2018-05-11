import React, { Component } from 'react'
import CandleStickStockScaleChart from './Chart';
import { getData } from './utils'

import { TypeChooser } from 'react-stockcharts/lib/helper';


class Chart extends Component {
  componentDidMount() {
    getData().then((data) => {
      this.setState({ data })
    })
  }
  render() {
    if (this.state == null) {
      return <div>Loading...</div>
    }
    return (
      <TypeChooser>
        {type => <CandleStickStockScaleChart type={type} data={this.state.data} />}
      </TypeChooser>
    )
  }
}

export default Chart
