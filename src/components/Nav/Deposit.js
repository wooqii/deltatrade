import React, { Component } from 'react'

import web3 from '../../ethereum/web3'
import instance from '../../ethereum/deltatrade/deltatrade.js'

export default class Deposit extends Component {

  state = {
    account:'',
    balance:'',
    depositEthBalance:'',
    depositTokenBalance:'',
    input: '',
  }

  async componentDidMount() {
    let account = await web3.eth.getAccounts()
    let balance = await web3.eth.getBalance(account[0])
    let depositEthBalance = await instance.methods.balanceOf(0, account[0]).call()
    this.setState({account,balance, depositEthBalance})
  }

  depositEther() {
    instance.methods.deposit().send({ from: this.state.account[0], gas:'1000000', value: this.state.input})
      .on('receipt', async (receipt) => {
        let balance = await web3.eth.getBalance(this.state.account[0])
        let depositEthBalance = instance.methods.balanceOf(0, this.state.account[0])
        //console.log(depositEthBalance)
        //this.setState({balance: balance, depositEthBalance: depositEthBalance})
      })
  }

  render() {
    return(
      <div>
        <div>
          address:{this.state.account[0]}
        </div>
        <div>
          current:{this.state.balance}
        </div>
        <div>
          deposit current: {this.state.depositEthBalance}
        </div>
        <button onClick={()=> {this.depositEther()}}>deposit</button>
        <input onChange={(e) => { this.setState({...this.state, input: e.target.value }) }} />
      </div>
    )
  }
}
