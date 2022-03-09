
function QFBtext(props) {
  
      return (
        <div className='option-feedback'>
          <p>{props.text}</p> 
          {/* <div className='npc-footer'> */}
          <div>
           {/* TODO: add back btn */}
          {/* <IconContext.Provider value={{ className: "return-icons" }}>
              <IoReturnUpBack />
            </IconContext.Provider> */}
          <button className='btn' onClick={props.action}>
            Next
          </button>
          {/* </div> */}
          </div>
        </div>
      );
    }
    
    export default QFBtext;