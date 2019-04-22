/* eslint-disable no-debugger */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import DogDetails from './DogDetails';
import query from './query';
const styles = require('./styles.scss');
class DogsCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
        breed: "labrador"
    }
  }
  handleClick(breedType) {
    this.setState({
        breed: breedType
    });
  }
  render() {  
    if(typeof this.props.data.getDogsList == 'undefined') {
      return(
        <div>Loading ... </div>
      );
    }
    return(
      <div className={styles.Wrapper}>
        <p>Dogs catalog</p>
        <div className={styles.Buttons}>
          {this.props.data.getDogsList.map( (dog) => {
            return (<button key={dog.id} onClick={ () => { this.handleClick(dog.breed) } }>{dog.breed}</button>);
          })}          
        </div>
        <DogDetails breed={this.state.breed} />
      </div>
    );
  }
}
export default graphql(query, {})(DogsCatalog);