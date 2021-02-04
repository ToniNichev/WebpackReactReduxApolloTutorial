import React from 'react';
import { UsersContextConsumer } from "../../usersContext";

const WithContextConnectedWrapperComponent = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return (
        <UsersContextConsumer>
          {contextProperty => (
            <WrappedComponent
              {...this.props}
              secretToLife={contextProperty.username}
            />
          )}
        </UsersContextConsumer>
      );
    }
  }
    
  return HOC;
};

export default WithContextConnectedWrapperComponent;