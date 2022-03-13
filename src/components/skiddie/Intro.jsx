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
            Hi there! you are just about to start your journey as a MaraStart Nowuder.
            Besides academics, extracurriculars and making friends,
            you also want to make sure that you spend you money well and keep a track of your "wealth".
            You will learn the basics of money management through this game by making a series of decisions.
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