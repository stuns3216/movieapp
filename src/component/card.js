import React, { Component } from "react";
import { Rate } from "antd";

export default class card extends Component {
  render() {
    return (
      <div className="cards">
        <div>{this.props.name}</div>
        <img className="img" src={this.props.img} />
        <div>
          <Rate allowHalf defaultValue={this.props.rate} />
        </div>
      </div>
    );
  }
}
