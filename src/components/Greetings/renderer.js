import React, { Component } from 'react';
import { connect } from 'react-redux';


const CHANGE_USERNAME = 'CHANGE_USERNAME';
const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';

class Greetings extends Component {

  constructor(props) {
    super(props); 
  }
  

  doneEditUsername() {
    let newName = document.querySelector('#inputField').value;
    this.props.changeUserName(newName);
    this.props.toggleLogInPopup();
  }

  usernameChanged(el) {
    let newName = el.target.value;    
    this.props.changeUserName(newName);
  }

  onToggleEditMode() {
    this.props.toggleLogInPopup();
  }

  render() {
    let element = <h2 onClick={() =>{   this.onToggleEditMode()  }}>Hello:  {this.props.userName}</h2>;
    if(this.props.editMode)
      element = <h2>Type new name:<input type="text" id='inputField' value={this.props.userName} onChange={(el) => { this.usernameChanged(el);}} /><button onClick={() =>{ this.doneEditUsername() }}>done</button></h2>
    return (
      <div>
        <div className={this.props.styles.wrapper}>
          {element}
        </div>
      </div>);
  }
}

const mapStateToProps = ( storeState ) => {
  return {  
    userName: storeState.user.userName,
    editMode: storeState.user.editMode
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleLogInPopup: () => {
      dispatch({type: TOGGLE_EDIT_MODE});
    },
    changeUserName: (userName) => {
      dispatch({type: CHANGE_USERNAME, data: userName});
    }
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greetings);