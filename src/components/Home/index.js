import React from 'react';
import Loadable from 'react-loadable';

const one = Loadable({
  loader: () => import ('./brands/one'),
  loading: () => <div>LOADING 1</div>,
});

const two = Loadable({
  loader: () => import ('./brands/two'),
  loading: () => <div>LOADING 2</div>,
});

const render = (styles) => {
  console.log("RENDERING WITH STYLES:: ", styles);
  return (
    <div>
      <div className={styles.wrapper}>This is my home section!</div>
    </div>
  )
}

const Home = ( {subDomain} ) => {
  return <one render={render} />;

  if (subDomain === 'one') {
    console.log("LOADING BRAND ONE");
    return <one render={render} />;
  }

  if (subDomain === 'two') {
    console.log("LOADING BRAND TWO");
    return <two render={render} />;
  }

  return (<div>NO BRAND WAS SELECTED</div>)
}

export default Home;