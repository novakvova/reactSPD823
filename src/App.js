import React, { Component } from 'react';

import './App.css';
import Friend, {appFriend} from './Friend';

class App extends Component {
  state = {
    appName: "Салют",
    isShowFriend: false
  }

  // showFriend() {

  // }
  showFriend=(e)=>{
    e.preventDefault();
    //alert("OnClick");
    this.setState({isShowFriend: !this.state.isShowFriend});
  }

  render() {
    console.log("---RENDER AppComponent------", this.state);
    const {appName, isShowFriend}=this.state;
    return (
      <div className="App">
        <h1>Hello react {appName}</h1>

        <button className="btn btn-success" onClick={this.showFriend}>Показати/приховати друга</button>
        {isShowFriend ? <Friend name="Петро"/> : ""}

      </div>
    );
  }
}


export default App;
