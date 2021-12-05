import { Component } from "react";

class TwoWayBinding extends Component {
  state = { inputVal:  this.props.initialValue};
  btnClickHandler = () => {
    this.setState({ inputVal: "change by button" });
  };
  inputChangeHandler = (evt) => {
    this.setState({ inputVal: evt.target.value });
  };
  render() {
    return (
      <div className="TwoWayBinding">
        <button onClick={this.btnClickHandler}>Click to change input</button>
        <p>this.state.inputVal : {this.state.inputVal}</p>
        <input
          onChange={this.inputChangeHandler}
          value={this.state.inputVal}
          defaultValue={this.props.initialValue}
        />
      </div>
    );
  }
}
export default TwoWayBinding;
