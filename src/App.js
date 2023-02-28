import React, { Component } from "react";
import Counter from "./Counter";
class App extends Component {
  state = { counter: 0 };

  onIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrease</button>
        <button
          onClick={() => {
            this.setState({ counter: 0 });
          }}>
          Reset
        </button>
        {/*different way to call function, shorter sintax but messier */}
        <Counter counter={this.state.counter} />
        {/*state is pass down in to the child */}
      </div>
    );
  }
}

export default App;
