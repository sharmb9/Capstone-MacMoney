function QFBtext(props) {
  
    return (
      <div className='option-feedback'>
        <p>{props.text}</p> 
        {/* <div className='npc-footer'> */}
        <div className="d-flex justify-content-end ">
         {/* TODO: add back btn */}
        {/* <IconContext.Provider value={{ className: "return-icons" }}>
            <IoReturnUpBack />
          </IconContext.Provider> */}
        <button className='btn btn-round bg-color-purple ' onClick={props.action}>
          Next
        </button>
        {/* </div> */}
        </div>
      </div>
    );
  }
  
  export default QFBtext;