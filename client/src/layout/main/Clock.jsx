import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString("fr-FR"),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.updateClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  updateClock() {
    this.setState({
      time: new Date().toLocaleTimeString("fr-FR"),
    });
  }
  render() {
    return (
      <div className="Time d-flex center">
        <p> {this.state.time}</p>
        <FontAwesomeIcon
          icon={faClock}
          spin
          size="xs"
          className="text-light  mx-3 mb-3"
        />
      </div>
    );
  }
}
export default Clock;
