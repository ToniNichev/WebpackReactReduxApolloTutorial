import React, { Component } from 'react';
const styles = require('./styles.scss');

const CHANGE_USERNAME = 'CHANGE_USERNAME';
const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';
class Greetings extends Component {
  
  constructor(props) {
    super(props); 
    const store = window.store.getState();
    let userName = store.userName;
    let editMode = store.editMode;

    this.state = {
      userName: userName,
      editMode: editMode
      }
  }  

  componentWillMount() {
    this.unsubscribe = window.store.subscribe(() => {
      // this function is called when dispatch method is called and state is changed.
      const newState = window.store.getState();
      this.setState( {userName: newState.userName,
                      editMode: newState.editMode
      });
    });  
  }
  componentWillUnmount() {
    this.unsubscribe();
  }  

  doneEditUsername() {
    let newName = document.querySelector('#inputField').value;
    window.store.dispatch({type: CHANGE_USERNAME, data: newName });  
  }

  usernameChanged(el) {
    this.setState({ userName: el.target.value });
  }

  render() {
    let element = <h2 onClick={() =>{ window.store.dispatch({type: TOGGLE_EDIT_MODE });     }}>Hello:  {this.state.userName}</h2>;
    if(this.state.editMode)
      element = <h2>Type new name:<input type="text" id='inputField' value={this.state.userName} onChange={(el) => { this.usernameChanged(el);}} /><button onClick={() =>{ this.doneEditUsername() }}>done</button></h2>
    return (
  <div>
    <div className={styles.wrapper}>
      {element}
    </div>
  </div>);
  }

}
export default Greetings;