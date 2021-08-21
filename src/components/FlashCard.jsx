import React, { Component } from "react";
import RandomWeighted from "./RandomWeighted";
import RegularCard from "./RegularCard";
import MultiCard from "./MultiCard";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faSpinner);

class FlashCard extends Component {
  constructor() {
    super();
    this.apiHostRoot = `https://aws-services.robertbunch.dev/services`;
    this.state = {
      flipClass: "",
      questionData: "",
    };
  }

  componentDidMount() {
    // this.newCard();
  }

  flip = () => {
    let newFlip = this.state.flipClass === "" ? "flip" : "";
    this.setState({
      flipClass: newFlip,
    });
  };

  newCard = () => {
    let path;
    console.log(this.props.cardStyle);
    const cardStyle = this.props.cardStyle;

    switch (cardStyle) {
      case "Random" || "Regular":
        path = this.apiHostRoot + "/all";
        break;
      case "Weighted":
        path = this.apiHostRoot + "/weighted";
        break;
      case "Multi":
        path = this.apiHostRoot + "/multi";
        break;
      default:
        path = this.apiHostRoot + "/all";
    }

    axios.get(path).then((response) => {
      this.setState({
        questionData: response.data,
      });
      this.props.nowReady();
    });
  };

  render() {
    if (!this.props.ready) {
      this.newCard();
      return (
        <div className="spinner-wrapper">
          <FontAwesomeIcon icon="spinner" size="6x" spin />
        </div>
      );
    }

    const cardStyle = this.props.cardStyle;
    let card;
    if (cardStyle === "Multi") {
      card = <MultiCard questionData={this.state.questionData} />;
    } else if (cardStyle === "Regular") {
      card = <RegularCard questionData={this.state.questionData} />;
    } else {
      card = <RandomWeighted questionData={this.state.questionData} />;
    }

    return (
      <div>
        <div className="row align-items-center card-holder">
          <div
            onClick={this.flip}
            className={`col-sm-6 offset-sm-3 card mb-3 ${this.state.flipClass}`}
          >
            {card}
          </div>
        </div>
        <button onClick={this.newCard} className="btn btn-primary btn-lg">
          New question
        </button>
      </div>
    );
  }
}

export default FlashCard;
