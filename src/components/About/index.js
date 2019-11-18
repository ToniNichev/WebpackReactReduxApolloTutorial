import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';

const CHANGE_USERNAME = 'CHANGE_USERNAME';

const AboutContainer = (state) => {
  const [co, setCount] = useState(0);
  const [ready, setReady] = useState(false);


  /*
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.userName,
    };    
  }
  */

  function handleChange() {
    const userName = document.querySelector('input[name=username]').value;
    state.onEdit(userName);
  }

  return (
    <div>
      <p>This is <input type="text" name="username" value={state.userName} onChange={() => { handleChange() }} /></p>
    </div>
  );

}
//export default About;
const mapStateToProps = storeState => ({
  userName: storeState.user.userName
}
);
const mapDispatchToProps = dispatch => ({
  onEdit: (userName) => dispatch({
    type: CHANGE_USERNAME,
    data: userName
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutContainer);