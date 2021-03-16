import React, { Component } from 'react'

import './App.css'
import CounterContainer from './containers/CounterContainer'
import PaletteContainer from './containers/PaletteContainer' // (1) 불러오기
import WaitingListContainer from './containers/WaitingListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaletteContainer /> {/* (2) 대체하기 */}
        <CounterContainer />
        <WaitingListContainer />
      </div>
    )
  }
}

export default App
