import React, { Component } from 'react';
import { connect } from 'react-redux';

const CHANGE_USERNAME = 'CHANGE_USERNAME';
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.userName,
    };    
  }
  handleChange() {
    const userName = document.querySelector('input[name=username]').value;
    this.setState( { userName: userName } );
    this.props.onEdit(userName);
  }
  render() {
    return (
      <div>
        <p>This is <input type="text" name="username" value={this.state.userName} onChange={() => { this.handleChange()}} /></p>
      </div>
    );
  }
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
const AboutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
export default AboutContainer;