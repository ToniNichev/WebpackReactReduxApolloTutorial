import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../Loading';

const One = Loadable({
  loader: () => import ('./brands/one'),
  loading: Loading
});

const Two = Loadable({
  loader: () => import ('./brands/two'),
  loading: Loading
});

const components = {
  one: One,
  two: Two
}

const Home = ( {subDomain} ) => {

  const Component = components[subDomain];
  return (
    <div>
      <Component />
    </div>
  )
}
export default Home;