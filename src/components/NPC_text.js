import Ltext from './Link_text';
import Background_blur from './Background_blur';
import Feedback from './Feedback';
import { IconContext } from "react-icons";
import { IoReturnUpBack } from "react-icons/io5";
import { useState } from 'react';

function Ntext(props) {

  const npcmsg = [
    
     { plaintText: [
       {textMsg:"Hello welcome to ", link: "McMaster University"},
       {textMsg:"! I am Shivam, your Student Mentor for this year. I will be helping you adjust to the new uni life with all thing finance. Let’s start with a basic tutorial on how the game will work and progress.", link: ""}
       ]
    } 
  ];

  const [showFeedback, setShowFeedback] = useState();

  function showFeedbackHandler() {
    setShowFeedback(true);
  }

  function closeFeedbackHandler() {
    setShowFeedback(false);
  }
    return (
      <div className='npc-text'>
        {/* <p>{props.text}</p> */}
        <p>
          {npcmsg[0].plaintText.map((msg) => 
          <span>{msg.textMsg}<Ltext text={msg.link} /></span>
          )}
        </p>

        {/* <div className='npc-footer'> */}
        <div className="align-right">
         {/* TODO: add back btn */}
        {/* <IconContext.Provider value={{ className: "return-icons" }}>
            <IoReturnUpBack />
          </IconContext.Provider> */}
        <button className='btn' onClick={showFeedbackHandler}>
          Next
        </button>
        {/* </div> */}
        </div>
        {showFeedback && <Background_blur onClick={closeFeedbackHandler} />}
        {showFeedback && <Feedback text='Back when I started uni I was solely using debit and cash for all my purchases. 
                  If I knew about credit card and it’s benifits, I could have earned a lot of cashback and maybe even a free plane ticket  D:' onClose={closeFeedbackHandler} />}
      </div>
    );
  }
  
  export default Ntext;