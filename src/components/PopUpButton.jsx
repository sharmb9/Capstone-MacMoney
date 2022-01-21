import React from 'react';

class PopUpButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      target: this.props.target
    };
  }

  render() {
    return (
      <a className="text-color-orange" data-bs-toggle="modal" data-bs-target={this.state.target}>
        { this.props.children }
      </a>
    )
  }
}

export default PopUpButton;
