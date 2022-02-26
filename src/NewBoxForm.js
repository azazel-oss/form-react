import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class NewboxForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      width: "",
      height: "",
      color: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let box = {
      ...this.state,
      key: uuidv4(),
    };
    this.props.onSubmit(box);
    this.setState({
      width: "",
      height: "",
      color: "",
    });
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="width">Enter width:</label>
          <input
            name="width"
            id="width"
            value={this.state.width}
            onChange={this.handleInputChange}
          />
          <br />
          <label htmlFor="height">Enter height:</label>
          <input
            name="height"
            id="height"
            value={this.state.height}
            onChange={this.handleInputChange}
          />
          <br />
          <label htmlFor="color">Enter color:</label>
          <input
            name="color"
            id="color"
            value={this.state.color}
            onChange={this.handleInputChange}
          />
          <br />
          <button type="submit" onClick={this.handleSubmit}>
            Add box
          </button>
        </form>
      </div>
    );
  }
}

export default NewboxForm;
