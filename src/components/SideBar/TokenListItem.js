import React from 'react';

import './TokenListItem.scss'

const TokenListItem = (props) => (
  <li className = 'TokenListItem' onClick = {() => {props.onClickToken(props.token)}}>
    <div className = 'TokenListItem__container'>
      <div className= 'TokenListItem__name'>{props.token.name}</div>
      <div className= 'TokenListItem__price'>{props.token.price}</div>
      <div className= 'TokenListItem__contrast'>{props.token.contrast}</div>
    </div>
    <hr />
  </li>
)

export default TokenListItem