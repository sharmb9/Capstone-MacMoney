import React, { useState,useEffect } from "react";
import QFBtext from './QuestionFeedback';
import questions from './questions'

const QuestionBox = () => {


  //   setting current question to 0 means starting with first question
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showQFeedback, setShowQFeedback] = useState();

  const [feedback, setfeedback] = useState({message: ''});

  const [selectedOption, setSelectedOption] = useState([]);

  const SELECT_OPTIONS_KEY = "SelectedOptions"
  
  //   shows the feedback when an option is clicked and (TODO) saves selected option to storage
  function handleOptionClick(option) {
    setShowQFeedback(true);
    const newfeedback = {message: option.feedback};
    setfeedback(newfeedback);
    //   saves the option to local storage
    setSelectedOption([...selectedOption, option])
    localStorage.setItem(SELECT_OPTIONS_KEY,JSON.stringify(selectedOption));
   };

  //   goes to next question when next button on feedback is clicked
  const handleNextClick = () => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length){
          setCurrentQuestion(nextQuestion)
      }
      setShowQFeedback(false);
  };

  return (
    <>
      {!showQFeedback &&<div className="question-container App-question">
        <div className="question-section">
          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>
          {/* This is just a placeholder button, handleNextClick will be used on feedback pop up */}
          {/* <div className = "option-section"><button className="option-button" onClick={() => handleNextClick()}>
              Next
          </button></div> */}
        </div>
        <div className="option-section">
          {questions[currentQuestion].answerOptions.map((answerOption) => (
            <button
              onClick={() => handleOptionClick(answerOption)}
              className="option-button"
            >
              {answerOption.answerText}
            </button>
          ))}
        </div>
      </div>}
      {showQFeedback &&< QFBtext text= {feedback.message} action={handleNextClick}/> }
    </>
  );
};

export default QuestionBox;