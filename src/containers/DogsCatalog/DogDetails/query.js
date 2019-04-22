import gql from 'graphql-tag';
const query = gql`
  query getDogByBreed($breed: String) 
  {
    getDogByBreed(breed: $breed) {
      id
      breed
      displayImage
    }
  }
`
export default query;