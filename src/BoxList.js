import React, { Component } from "react";
import NewboxForm from "./NewBoxForm";
import Box from "./Box";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleAdd(box) {
    this.setState((prevState) => {
      return {
        boxes: [...prevState.boxes, box],
      };
    });
    console.log(box);
  }
  handleRemove(key) {
    this.setState((prevState) => {
      return {
        boxes: prevState.boxes.filter((element) => element.key !== key),
      };
    });
  }
  render() {
    return (
      <div>
        <NewboxForm onSubmit={this.handleAdd} />

        {this.state.boxes.map((element) => {
          return (
            <Box
              height={element.height}
              width={element.width}
              color={element.color}
              key={element.key}
              index={element.key}
              onRemove={this.handleRemove}
            />
          );
        })}
      </div>
    );
  }
}

export default BoxList;
