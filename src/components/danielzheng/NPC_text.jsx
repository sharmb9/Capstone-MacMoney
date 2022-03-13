import Ltext from './Link_text';
import Background_blur from './Background_blur';
import Feedback from './Feedback';
// import { IconContext } from "react-icons";
// import { IoReturnUpBack } from "react-icons/io5";
import { useState } from 'react';

function Ntext(props) {

  // const npcmsg = [
    
  //    { plaintText: [
  //      {textMsg:"Hello welcome to ", link: "McMaster University"},
  //      {textMsg:"! I am Shivam, your Student Mentor for this year. I will be helping you adjust to the new uni life with all thing finance. Let’s start with a basic tutorial on how the game will work and progress. ", link: ""}
  //      ]
  //   } 
  // ];

  // const [showFeedback, setShowFeedback] = useState();

  // function showFeedbackHandler() {
  //   setShowFeedback(true);
  // }

    return (
      <div className='npc-text '>
        <p>{props.txt}</p>
        {/* <p>
          {props.txt.plaintText.map((msg) => 
          <span>{msg.textMsg}<Ltext text={msg.link} /></span>
          )}
          
        </p>
        <p>{props}</p> */}

        {/* <div className='npc-footer'> */}
        <div className="align-right">
        <button className='btn btn-round' onClick={props.action}>
          Next
        </button>
        {/* </div> */}
        </div>
        { /*actions after click Next*/ }
        </div>
        
    );
  }

  
  export default Ntext;