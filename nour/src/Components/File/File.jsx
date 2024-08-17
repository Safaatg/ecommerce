import React, { Component } from "react";

class File extends Component {
  method(name2) {
    return <h4>{name2}</h4>;
  }
  render() {
    // const name = "safaa";
    // const name2= this.method("saeed")

    return (
      <div>
        <div>{this.props.name}</div>
        {this.props.name2}
      </div>
    );
  }
}

export default File;
