import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class UsersContextProvider extends Component {
  state = {
    username: "no username!"
  };

  setUsername = (newUsername) => {
    this.setState(prevState => {
      return {
        username: newUsername
      };
    });
  };

  render() {
    return (
      <Provider
        value={{ username: this.state.username, setUsername: this.setUsername }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { UsersContextProvider, Consumer as UsersContextConsumer };
