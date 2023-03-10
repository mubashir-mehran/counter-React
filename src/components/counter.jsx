//import { count } from 'console';
import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getbadgeclass()}> {this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm "
          >
            +{" "}
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled= { this.props.counter.value === 0 ? "disable" : ""}  
          >
            -{" "}
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm "
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
  getbadgeclass() {
    let classses = "badge m-3 text-bg-";
    classses += this.props.counter.value === 0 ? "warning" : "primary";
    return classses;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
export default Counter;
