import React from 'react';
import { graphql } from 'react-apollo';
import query from './query';
const DogDetails = (props) => {
  if(typeof props.data.getDogByBreed === 'undefined') {
    return (
      <p>Loading ...</p>
    );
  }
  return(
    <div>
        <span>breed: </span>
        <span>{props.data.getDogByBreed.breed}</span>
        <br />
        <img src={props.data.getDogByBreed.displayImage} />
    </div>
  );
}
let breed = 'labrador';
export default graphql(query, {
  justADumFunction(ThePropsValuesPassedIntoTheFunction) {
    return {
      variables: {
        breed: ThePropsValuesPassedIntoTheFunction.breed,
      },
    };
  },
})(DogDetails);