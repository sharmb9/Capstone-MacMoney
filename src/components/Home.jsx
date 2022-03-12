import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-6 bg-color-grey d-flex flex-column justify-content-center align-items-center">
            <div className="text-white fs-1 fw-bold" style={{width: 350}}>
              Enjoy the
              <br/>
              <span className="text-color-light-orange">fun</span>
              <br/>
              And learn <span className="text-color-violet">more</span>
            </div>
          </div>
          <div className="col-6 d-flex flex-column justify-content-center align-items-center">
            <div className="text-color-orange mb-3 fs-1 fw-bold">
              MacMoney
            </div>
            <div>
              <Link className="btn bg-color-orange text-white fs-5 px-5" to="/intro">Play</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
