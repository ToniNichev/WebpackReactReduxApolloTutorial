import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../Loading';



const one = Loadable({
  loader: () => import ('./brands/one'),
  loading: Loading
});

const two = Loadable({
  loader: () => import ('./brands/two'),
  loading: Loading
});


const Home = ( {subDomain} ) => {

  const Component = components[subDomain];
  return (
    <div>
      <Component />
    </div>
  )
}
export default Home;