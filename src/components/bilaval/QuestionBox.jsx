import React, { useState,useEffect } from "react";
import QFBtext from './QuestionFeedback';
import questions from './questions';
import Npc from '../skiddie/Npc';
import PopUpButton from '../skiddie/PopUpButton';
import PopUp from '../skiddie/PopUp';
import Ntext from '../danielzheng/NPC_text';
import End from '../skiddie/End';
import Graph from "../graph/Graph"

const QuestionBox = () => {


  //   setting current question to 0 means starting with first question
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showQFeedback, setShowQFeedback] = useState();

  const [feedback, setfeedback] = useState({message: ''});

  const [selectedOption, setSelectedOption] = useState([]);

  const [showTopic, setShowTopic] = useState();

  const [isEnd, setIsEnd] = useState();

  const SELECT_OPTIONS_KEY = "SelectedOptions"
  
  let localStorageAnswers;
  
  //   shows the feedback when an option is clicked and (TODO) saves selected option to storage
  function handleOptionClick(option) {
    setShowQFeedback(true);
    console.log("showFeddback is true")
    const newfeedback = {message: option.feedback};
    setfeedback(newfeedback);
    //   saves the option to local storage
    setSelectedOption([...selectedOption, option])
    localStorage.setItem(SELECT_OPTIONS_KEY,JSON.stringify(selectedOption));
    console.log("handleOption",currentQuestion)
    // alert(localStorage.getItem(SELECT_OPTIONS_KEY))

    // saves selected option in nested json manner for Graph
    var arr = JSON.parse(window.localStorage.getItem("optionFeedback"))
    arr = arr.concat([{id: option.id, value: option.feedback}])
    var arr2 = JSON.parse(window.localStorage.getItem("optionSelected"))
    arr2 = arr2.concat([option.id])
    window.localStorage.setItem("optionFeedback", JSON.stringify(arr))
    window.localStorage.setItem("optionSelected", JSON.stringify(arr2))
    
   };

  //   goes to next question when next button on feedback is clicked
  // function handleNextClick(question){
  //     const nextQuestion = currentQuestion + 1;
  //     if (nextQuestion < questions.length){
  //         setCurrentQuestion(nextQuestion)
  //     }
  //     if (question.isLast==true) {
  //       setShowTopic(true)
  //       console.log("isLast is true")
  //     }
  //     // on clicking next on topic, set showTopic to false
  //     setShowQFeedback(false);
      
      
  // };

  function handleNextClick(){
    console.log("next click",currentQuestion)
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length){
        setCurrentQuestion(nextQuestion)
    }
    if (questions[currentQuestion].isLast==true) {
      setShowTopic(true)
      console.log("isLast is true")
    }

    if (questions[currentQuestion].EOF==true) {
      setIsEnd(true)
      console.log("isEnd is true")
    }
    // on clicking next on topic, set showTopic to false
    setShowQFeedback(false);
    
    
};

  const setTopicFalse= () => {
    setShowTopic(false)
    console.log("next click",currentQuestion)
  }

  return (
    <>
    {/* render topic component here */}
      
      {!isEnd && !showTopic && !showQFeedback &&<div className="question-container App-question">
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
            // <div>
              // {/* <img src = "https://cdn-icons-png.flaticon.com/512/609/609803.png"></img> */}
              // {/* <img src = {answerOption.img}></img> */}
              <button
              onClick={() => handleOptionClick(answerOption)}
              className="option-button"
            >
              {/* <span><img src = {answerOption.img}></img> </span> */}
              {/* <span>{answerOption.answerText}</span> */}
              <img src = {answerOption.img} height="100px" width="100px"></img><br></br>
              {answerOption.answerText}
            </button>
            // {/* </div> */}
          ))}
        </div>
        <Npc target="#hint" img="https://cdn-icons-png.flaticon.com/512/2784/2784403.png"/>
        <PopUp id="hint">
          {questions[currentQuestion].hint}
        </PopUp>
      </div>}
      {!isEnd && showTopic && <Ntext txt = {questions[currentQuestion].topic}  action= {setTopicFalse}/> }
      {showQFeedback &&<><Npc img="https://cdn-icons-png.flaticon.com/512/2784/2784403.png"/>< QFBtext text= {feedback.message} action={handleNextClick} /> </>}
      {isEnd &&<Graph/>}
    </>
  );
};

export default QuestionBox;