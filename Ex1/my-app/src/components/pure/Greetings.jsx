import React, { Component } from "react";
import PropTypes from "prop-types";

class Greetings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 23,
    };
  }

  render() {
    return (
      <div>
        <h1>¡¡Hola {this.props.name}!!</h1>
        <h2>Tu edad es {this.state.age} años.</h2>
        <div>
          <button onClick={this.birthday}>
          Cumplir años
          </button>
        </div>
      </div>
    );
  }

  birthday = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };
}
Greetings.propTypes = {
    name: PropTypes.string
};

export default Greetings;