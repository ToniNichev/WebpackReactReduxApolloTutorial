import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class UsersContextProvider extends Component {
  state = {
    username: "initial username: no username!"
  };

  setUsernameFunc = (newUsername) => {
    this.setState(prevState => {
      return {
        username: newUsername
      };
    });
  };
  
  render() {

    console.log(">>>>", this.props.children);
    return (
      <Provider
        value={{ test: '123', username: this.state.username, setUsername: this.setUsernameFunc }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { UsersContextProvider, Consumer as UsersContextConsumer };
