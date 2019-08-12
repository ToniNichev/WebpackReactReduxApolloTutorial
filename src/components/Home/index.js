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

const components = {
  one,
  two
}

const Home = ( {subDomain} ) => {

  const Component = components[subDomain];
  return (
      <Component />
  )
}
export default Home;