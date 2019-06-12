import React, { Component } from 'react';
import PagesLayoutData from './pages-layout-data';

const styles = require('./styles.scss');

export default (props) => {

  function getComponentsList(url) {
    return PagesLayoutData[url];
  }
  
  const url = props.location.pathname;

  function getComponents(componentsList) {  
    let components = componentsList.map((componentName, id , allLomponents) => {
      // This works on SSR but doesn't split the bundle since webpack is considering all files necessary to load.
      // this creates `server-build/main-bundle.js` that will have the JS code for all components, which we are NOT going to use.
      // We just need the components source code on the server side.
      let component = require(`../../components/${componentName}`);
      const componentWithWrapper = <component.default key={`wrapper-${id}`} />;
      return componentWithWrapper;
      
    });
    return components;
  }

  const componentsList = getComponentsList(url);
  const components = getComponents(componentsList);
  const allComponents = components.map( (component) => {
    return component;
  });

  return(
    <div className={styles.wrapper}>
      {allComponents}
    </div>
  );
}
