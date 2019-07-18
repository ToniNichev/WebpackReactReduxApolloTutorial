import React, { Component } from 'react';

const styles = require('./styles.scss');

class Greetings extends Component {

  constructor(props) {
    super(props); 
    this.state = {
      userName: "noname",
      editMode: false
    }
  }

  

  doneEditUsername() {
    let newName = document.querySelector('#inputField').value;

  }

  usernameChanged(el) {
    let newName = el.target.value;    
  }

  onToggleEditMode() {
    this.setState( { editMode: !this.state.editMode } );
  }

  doneEditUsername() {
    this.setState( { editMode: false } );
  }

  render() {
    let element = <h2 onClick={() =>{   this.onToggleEditMode()  }}>Hello:  {this.state.userName}</h2>;
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