import gql from 'graphql-tag';
const query = gql`
query getDogsList
{
  getDogsList {
    id
    breed
  }
}
`
export default query;