import React from 'react'

import TokenListItem from './TokenListItem'
import './TokenList.scss'

const TokenList = (props) => {
  const tokenItems = props.tokens.map((token) => {
    if (token.name.indexOf(props.input) !== -1) {
      return (
        <TokenListItem
          key={token.name}
          token={token}
          onClickToken={props.onClickToken}
        />
      )
    }
  });

  return (
    <ul className="tokenList">
      {tokenItems}
    </ul>
  );
};

export default TokenList;
