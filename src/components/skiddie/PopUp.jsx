import React from 'react';

class PopUp extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
    };
  }

  render() {
    return (
      <div className="modal fade" id={this.state.id} tabindex="-1">
        <div className="modal-dialog vh-100 d-flex align-items-center my-0">
          <div className="modal-content bg-color-black p-3">
            <div className="mb-3 text-white">{ this.props.children }</div>
            <div className="d-flex justify-content-center">
                <button type="button" className=" btn bg-color-orange text-white" data-bs-dismiss="modal">Got it</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PopUp;
