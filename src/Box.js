import React, { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.onRemove(this.props.index);
  }
  render() {
    let styleObject = {
      backgroundColor: this.props.color,
      width: this.props.width + "px",
      height: this.props.height + "px",
    };
    return (
      <div>
        <div style={styleObject}></div>
        <button onClick={this.handleClick}>x</button>
      </div>
    );
  }
}

export default Box;
