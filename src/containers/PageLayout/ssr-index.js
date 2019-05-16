import React, { Component } from 'react';
import ComponentList from './ComponentList';

import query from './query';
import { graphql } from 'react-apollo';

const styles = require('./styles.scss');


class PageLayout extends Component {


    constructor(props) {
      super(props);      
    } 
  
    render() {   

      
     console.log(">>>>>> his.props.data: ", this.props.data);
     console.log(">>>>>> getPageByUrl: ", this.props.data.getPageByUrl);

     const allLayout = this.props.data.getPageByUrl.layout.map((layoutList) => {
        const layout = layoutList.components.map((component, id) => {
          const componentName = component.name;
          console.log(">>>>>> componentName: ", componentName);        
          const ChildComponent = ComponentList[componentName];
          if(typeof ChildComponent === 'undefined') {
            return(
              <div key={componentName + '-' + id} className={styles.error}>Can't find `{componentName}` component!</div>
            );
          }
          return (
              <ChildComponent key={componentName + '-' + id} />
          );
        });
        return layout;
      });
      return(allLayout);
    }
}

export default graphql(query, {
  options(props) {
    console.log(">>>>>> location : ", props.location);
    return {
      variables: {
        url: props.location
      },
    };
  },
})(PageLayout);