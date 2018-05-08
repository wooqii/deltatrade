import React, { Component } from 'react'

import TokenList from './TokenList'
import './SortableTokenList.scss'

/*
world state:
1) tokenList: 현재 trade 가능한 모든 token에 대한 list를 보여준다.
2) selectedToken: 현재 선택된 token에 대한 정보를 담고있다.
3) usersTokens: 현재 유저가 보유한 토큰 리스트를 보여준다.
*/

export default class SortableTokenList extends Component {
  state = {
    input: '',
  }

  render () {
    const {tokens, onClickToken} = this.props;
    return(
      <div className = 'SortableTokenList__container'>
        <input onChange={(e) => {this.setState({input: e.target.value})}} />
        <TokenList
          input = {this.state.input}
          tokens = {tokens}
          onClickToken ={onClickToken}
        />
      </div>
    )
  }
}
