import React, { Component } from "react";
import "./App.css";
import FlashCard from "./components/FlashCard";

import QuizBar from "./components/QuizBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardStyle: "Random",
      ready: false,
    };
  }

  userChoice = (cardStyle) => {
    console.log(cardStyle);
    this.setState({
      cardStyle,
      ready: false,
    });
  };

  nowReady = () => {
    this.setState({
      ready: true,
    });
  };

  render() {
    return (
      <div className="App align-items-center d-flex">
        <div className="container">
          <QuizBar userChoice={this.userChoice} />
          <FlashCard
            cardStyle={this.state.cardStyle}
            nowReady={this.nowReady}
            ready={this.state.ready}
          />
        </div>
      </div>
    );
  }
}

export default App;
