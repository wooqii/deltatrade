import React, { Component } from 'react'

import SortableTokenList from './SortableTokenList'
import TradingPair from './TradingPair'

export default class SideBar extends Component {
  state = {
    tokens: [{ name: 'eos', price: 15000, contrast: 5 }, { name: 'snt', price: 3000, contrast: 5 }, { name: 'eth', price: 900000, contrast: 5 }],
    selectedToken: { name: 'eos', price: 15000, contrast: 5 },
  }

  render() {
    return (
      <div>
        <TradingPair
          selectedToken={this.state.selectedToken}
        />
        <SortableTokenList
          tokens={this.state.tokens}
          onClickToken={(value) => { this.setState({ ...this.state, selectedToken: value }) }}
        />
      </div>
    )
  }
}
