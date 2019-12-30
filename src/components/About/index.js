import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';

const CHANGE_USERNAME = 'CHANGE_USERNAME';

const AboutContainer = (state) => {
  const [which, setWhich] = useState(false);

  function handleChange() {
    const userName = document.querySelector('input[name=username]').value;
    state.onEdit(userName);
  }

  function switchComponents() {
    setWhich(!which);
  }

  let componentA = (<p>This is <input type="text" name="username" value={state.userName} onChange={() => { handleChange() }} /></p>);
  let componentB = (<p>Another component</p>)
  return (
    <div>
      {!which ? componentA : componentB}
      <button onClick={ () => {switchComponents() } }>TEST</button>
    </div>
  );

}

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