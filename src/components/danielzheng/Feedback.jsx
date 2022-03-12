function Feedback(props) {
    return (
        <div className="container-fuild vh-50 feedbackBox ">
            <p>{props.text}</p>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn-round btn-feedback"  onClick={props.onClose}>Okay</button>
            </div>
        </div>
        
    );
}
  export default Feedback;