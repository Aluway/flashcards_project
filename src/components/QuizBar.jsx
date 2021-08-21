import React from "react";

import QuizType from "./QuizType";

function QuizBar(props) {
  const quizArray = [
    {
      icon: "dice",
      type: "Random",
    },
    {
      icon: "file-alt",
      type: "Regular",
    },
    {
      icon: "dumbbell",
      type: "Weighted",
    },
    {
      icon: "font",
      type: "Multi",
    },
  ];

  const quizTypes = quizArray.map((qt, i) => {
    return (
      <QuizType
        key={i}
        userChoice={props.userChoice}
        icon={qt.icon}
        quizType={qt.type}
      />
    );
  });

  return (
    <div className="Quiz-bar">
      <h1>Choose your study type</h1>
      <ul className="nav nav-pills nav-fill">{quizTypes}</ul>
    </div>
  );
}

export default QuizBar;
