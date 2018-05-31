import React, { Component } from 'react';

import './TradingPair.scss'

export default class TradingPair extends Component {
  render() {
    return (
      <div className="TradingPair__container">
        <div className="left big">
          {this.props.selectedToken.name}
        </div>
        <div className="right big">
          {this.props.selectedToken.price}/
          {this.props.selectedToken.contrast}
        </div>
        <div>
          <a className="TradingPair__link">
            info
          </a>
          <a className="TradingPair__link">
            site
          </a>
        </div>
        <div className="TradingPair__detail">
          최저가: 15,000
        </div>
        <div className="TradingPair__detail">
          최고가: 15,000
        </div>
        <div className="TradingPair__detail">
          거래량: 50,000
        </div>
      </div>
    )
  }
}
