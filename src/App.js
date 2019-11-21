import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      red: "127",
      green: "127",
      blue: "127"
    };
  }

  handleChange = event => {
    console.log("touched");
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  newColor = () => {
    return `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`;
  };

  render() {
    return (
      <div className="App">
        <form className="form mt-5">
          <h1>RGB Picking Colors Tool</h1>
          <div className="form-group">
            <div className="col-6 offset-6">
              <label className="align-right">Red Color</label>
            </div>
          </div>
          <div className="row container-fluid">
            <div className="col-6 ">
              <input
                onChange={this.handleChange}
                value={this.state.red}
                className="picker"
                name="red"
                type="range"
                min="0"
                max="255"
                placeholder="Red"
              ></input>
            </div>
            <div className="col-6 ">
              <input
                value={this.state.red}
                align="center"
                type="number"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="form-group">
            <div className="col-6 offset-6">
              <label className="align-right">Green Color</label>
            </div>
          </div>
          <div className="row container-fluid">
            <div className="col-6 ">
              <input
                onChange={this.handleChange}
                value={this.state.green}
                className="picker"
                name="green"
                type="range"
                min="0"
                max="255"
                placeholder="Red"
              ></input>
            </div>
            <div className="col-6 ">
              <input
                value={this.state.green}
                align="center"
                type="number"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="form-group">
            <div className="col-6 offset-6">
              <label className="align-right">Blue Color</label>
            </div>
          </div>
          <div className="row container-fluid">
            <div className="col-6 ">
              <input
                onChange={this.handleChange}
                value={this.state.blue}
                className="picker"
                name="blue"
                type="range"
                min="0"
                max="255"
                placeholder="Blue"
              ></input>
            </div>
            <div className="col-6 ">
              <input
                value={this.state.blue}
                align="center"
                type="number"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="row align-items-center">
            <div
              className="col-10 offset-1 mt-3 box"
              style={{
                // border: "1px solid blue",
                padding: "4px",
                background: `${this.newColor()}`
              }}
            >
              {this.newColor()}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
