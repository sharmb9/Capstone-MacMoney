function Feedback(props) {
    return (
        <div className='feedbackBox'>
          <p>{props.text}</p>
          <button className='btn btn-feedback' onClick={props.onClose}>
            Okay
          </button>
        </div>
    );
}
  export default Feedback;