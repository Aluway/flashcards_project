import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faFont,
  faFileAlt,
  faDice,
} from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faDumbbell);
library.add(faFont);
library.add(faFileAlt);
library.add(faDice);

function QuizType(props) {
  return (
    <li className="col-sm-3 text-center">
      <div
        onClick={() => props.userChoice(props.quizType)}
        className="nav-card"
      >
        <FontAwesomeIcon icon={props.icon} size="4x" />
        <span>{props.quizType}</span>
      </div>
    </li>
  );
}

export default QuizType;
