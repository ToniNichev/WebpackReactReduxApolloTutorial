import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';


const AboutContainer = (state) => {
  const [co, setCount] = useState(0);
  const [ready, setReady] = useState(false);
  

  useEffect(() => {
    if( ready === true) {
      return;
    }
    // Update the document title using the browser API
    console.log("count:", co);
    setCount(co + 1);
    setReady(true);
  });

  function clicked() {
    setCount(co + 1);
  }
  return (
    <div>
      {state.userName}
       <hr/>
       <a role="button" tabIndex={0} onClick={() => clicked()}>TEST: {co}</a>
    </div>
  );
}

//export default About;
const mapStateToProps = storeState => ({
  userName: storeState.user.userName
}
);
const mapDispatchToProps = dispatch => ({
  dispatch: (action) => {
    dispatch(action);
  },  
  onEdit: (userName) => dispatch({
    type: CHANGE_USERNAME,
    data: userName
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutContainer);
