import React from 'react';
// import {Link} from 'react-router-dom';

class End extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   target: this.props.target
    // };
  }
  render() {
    return (
      <div className="vh-100 bg-color-grey">
        <div className="container intro">
          <p className="fs-1 text-white mt-3">
            Hope you feel more comfortable when it comes to money related issues! If you would like to learn more abount financial management, feel free to reach out to McMaster's Money Center located in Student center.
          </p>
          <div className="d-flex justify-content-center">
          </div>
        </div>
      </div>
    )
  }
}

export default End;