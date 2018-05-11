import React from 'react'

import './Layout.scss'
import SideBar from 'components/SideBar/index';
import Chart from 'components/Chart/index';

const Layout = () => (
  <div className="Layout">
    <div className="Layout__Header">
      {/*
        TODO: import Nav component,
        ex: <Nav />
      */}
      Layout__Header
    </div>
    <LayoutLeft />
    <LayoutCenter />
    <LayoutRight />
  </div>
)

const LayoutLeft = () => (
  <div className="Layout__Left">
    <div className="Layout__Sidebar">
      {<SideBar />}
      Layout__Sidebar
    </div>
  </div>
)

const LayoutCenter = () => (
  <div className="Layout__Center">
    <div className="Layout__Chart">
      {<Chart />}
      Layout__Chart
    </div>
    <div className="Layout__OrderBook">
      {/*
        TODO: import OrderBook component,
        ex: <OrderBook />
      */}
      Layout__OrderBook
    </div>
  </div>
)

const LayoutRight = () => (
  <div className="Layout__Right">
    <div className="Layout__Market">
      {/*
        TODO: import Market component,
        ex: <Market />
      */}
      Layout__Market
    </div>
    <div className="Layout__RecentTrade">
      {/*
        TODO: import RecentTrade component,
        ex: <RecentTrade />
      */}
      Layout__RecentTrade
    </div>
  </div>
)

export default Layout
