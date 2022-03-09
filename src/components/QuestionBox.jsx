import React, { useState } from "react";
import QFBtext from './QuestionFeedback';


const QuestionBox = () => {
  // Create ID for each question and answer
  const questions = [
    {
      questionText:
        "Hello there! So before we get started with money management, first you should decide where you will be living for the school year",
      answerOptions: [
        { answerText: "On Campus", img: "assets/offcampus.png", feedback: "Nice! you decided to live on campus with fellow first years. Everything is already paid up front. " },
        { answerText: "Off Campus", img: "assets/oncampus.png", feedback: "Great choice! I did the same thing during my first year. You get to save quite more compared to living on campus and get to enjoy your freedom." },
        { answerText: "Commute", img: "assets/commute.png", feedback: "Domestic bliss!. The cheapest of the three options. You will be saving a lot of money by commuting and will not have to worry too much about spending money on food and accomodation." },
      ]
    },
    {
      questionText:
        "How do you pay for grocerries",
      answerOptions: [
        { answerText: "Cash", img: "assets/cash.png", feedback: 'smdjlsjdjd'},
        { answerText: "On Campus", img: "assets/oncampus.png", feedback: 'khskhdhshhshkdshhdks' }
      ]
    },
    {
      questionText:
        "After doing some grocerries and paying off your rent, you have some extra money in hand. What would you usually do with this money?",
      answerOptions: [
        { answerText: "Invest", img: "assets/invest.png" },
        { answerText: "Save", img: "assets/save.png" },
        { answerText: "Spend", img: "assets/spend.png" }
      ]
    },
  ];

  //   setting current question to 0 means starting with first question
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showQFeedback, setShowQFeedback] = useState();

  const [feedback, setfeedback] = useState({message: ''});
  
  //   shows the feedback when an option is clicked
  function handleOptionClick(option) {
    setShowQFeedback(true);
    const newfeedback = {message: option};
    setfeedback(newfeedback);
    //   shows the feedback when an option is clicked
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
      {!showQFeedback &&<div className="question-container">
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
              onClick={() => handleOptionClick(answerOption.feedback)}
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


