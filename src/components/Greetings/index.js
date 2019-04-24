import React, { Component } from 'react';
const styles = require('./styles.scss');
const CHANGE_USERNAME = 'CHANGE_USERNAME';
const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';
class Greetings extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      userName: window.store.userName,
      editMode: window.store.editMode
      }
  }  
  doneEditUsername() {
    let newName = document.querySelector('#inputField').value;
    window.store.userName = newName;
    window.store.editMode = false;
    this.setState({userName: window.store.userName , editMode: window.store.editMode});
  }
  usernameChanged(el) {
    window.store.userName = el.target.value;
    this.setState({ userName: window.store.userName });
  }
  render() {
    let element = <h2 onClick={() =>{ window.store.editMode = !window.store.editMode; this.setState({editMode: window.store.editMode});    }}>Hello:  {this.state.userName}</h2>;
    if(this.state.editMode)
      element = <h2>Type new name:<input type="text" id='inputField' value={this.state.userName} onChange={(el) => { this.usernameChanged(el)}} /><button onClick={() =>{ this.doneEditUsername() }}>done</button></h2>
    return (
  <div>
    <div className={styles.wrapper}>
      {element}
    </div>
  </div>);
  }
}
export default Greetings;