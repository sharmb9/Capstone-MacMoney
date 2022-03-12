import React from 'react';
import {Link} from 'react-router-dom';

class Intro extends React.Component {

  render() {
    return (
      <div className="vh-100 bg-color-grey">
        <div className="container intro">
          <p className="fs-1 text-white">
            Hi there! you are just about to start your journey as a Marauder.
            Besides academics, extracurriculars and making friends,
            you also want to make sure that you spend you money well and keep a track of your "wealth".
            You will learn the basics of money management through this game by making a series of decisions.
          </p>
          <div className="d-flex justify-content-center">
            <Link class="btn bg-color-orange text-white fs-5 px-5 mt-5">Next</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro;
