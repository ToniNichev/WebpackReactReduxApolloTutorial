import React, { Component } from 'react';
import ComponentList from './ComponentList';
import PagesLayoutData from './pages-layout-data';
import Loading from '../../components/Loading';
import query from './query';
import { graphql } from 'react-apollo';
const styles = require('./styles.scss');

class PageLayout extends Component {
  constructor(props) {
    super(props);      
  } 

  render() {
    
    console.log("getPageByUrl  >>>>>", this.props.data.getPageByUrl);
    const allLayout = this.props.data.getPageByUrl.layout.map((layoutList) => {
      const layout = layoutList.components.map((component, id , components) => {
        const componentName = component.name;        
        const ChildComponent = ComponentList[componentName];
        if(typeof ChildComponent === 'undefined') {
          return(
            <div key='{id}' className={styles.error}>Can't find {componentName} component!</div>
          );
        }
        return (
            <ChildComponent key={componentName} />
        );
      });
      return layout;
    });
    return(
      <div className={styles.app}>
        {allLayout}
      </div>
    );
  }
}
export default graphql(query, {
  options(props) {
    return {
      variables: {
        url: props.history.location.pathname
      },
    };
  },
})(PageLayout);