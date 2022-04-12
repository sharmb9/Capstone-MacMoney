import React from 'react';
// import {Link} from 'react-router-dom';

class Intro extends React.Component {
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
            <h1>How to use</h1>
          <ul>
              <li class="">The website tries to emulate financial situation of students.</li>
              <li class="">Each question comes with various options. On selecting an option the user will be provided with a feedback.</li>
              <li class="">There is no right or wrong option, instead the website aims to provide a feedback</li>
              <li class="">Users can click on the NPC avatar at bottom left of each question if they want to know what other poeple who are experienced with handling similar financial situation would do</li>
          </ul>
          </p>
          <div className="d-flex justify-content-center">
          <button className="btn bg-color-orange text-white fs-5 px-5 mt-5" onClick={this.props.action}>Start Now</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro;