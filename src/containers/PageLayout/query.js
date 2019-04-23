import gql from 'graphql-tag';

const query = gql`
query getPageByUrl($url: String) 
{
  getPageByUrl(url: $url) {
    id
    url
    layout {
      span
      components {
        name
      }        
    }
  }
}
`
export default query;