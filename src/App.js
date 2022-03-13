import './CSS/App_skiddie.css';
import './CSS/App_danielzheng.css';
import './CSS/App_bilaval.css';
import React, { useState,useEffect } from "react";


import PopUpButton from './components/skiddie/PopUpButton';
import PopUp from './components/skiddie/PopUp';
import Home from './components/skiddie/Home';
import Npc from './components/skiddie/Npc';
import Ntext from './components/danielzheng/NPC_text';
import Navbar from './components/danielzheng/Navbar';
import QuestionBox from './components/bilaval/QuestionBox';
import hints from './components/danielzheng/npcHints';
import Intro from './components/skiddie/Intro';

const App = () => {

   const npcmsg = "Hello Welcome to McMaster! This game will try to simulate to ";

  //   setting current question to 0 means starting with first component
  const [currentComponent, setCurrentComponent] = useState(0);

  const [header, setHeader] = useState();

  const [isIntro, setIntro] = useState();

  function showIntro(){
    setIntro(true)
  }

  function showHeaderHandler() {
    setHeader(true);
  }

  // function startGame(){
    
  // }

  //   goes to next question when next button on feedback is clicked
  const handleNextClick = () => {
    setCurrentComponent(currentComponent + 1 );
};

  return (
    <div className="App">
      {!header && !isIntro && <Home action={showIntro}/>}
      {!header && isIntro && <Intro action={showHeaderHandler}/>}
      
      {header && <>
      <Navbar/>
      {currentComponent==0 &&
      <><Ntext txt={npcmsg} action={handleNextClick}/>
      <Npc target="#hint"/>
      <PopUp id="hint">
        This is a hint.
      </PopUp> </>} 
      {currentComponent==1 && <QuestionBox/>}
        </>}
    </div>
  );

}

export default App;
