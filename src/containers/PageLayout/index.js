import React, { Component } from 'react';
import ComponentList from './ComponentList';
import PagesLayoutData from './pages-layout-data';

const styles = require('./styles.scss');

class PageLayout extends Component {

    constructor(props) {
      super(props);      

      this.state = {
        url: typeof window == 'undefined' ? props.location : props.history.location.pathname,
        componentsList: ['Header', 'Home']
      }
    } 

    componentWillReceiveProps(nextProps) {
      const url = typeof window == 'undefined' ? nextProps.location : nextProps.history.location.pathname;
      const componentsList = this.getComponentsList(url);
      this.setState({ url: url, componentsList: componentsList });
    }
  
    getComponentsList(url) {
      return PagesLayoutData[url];
    }

    render() {
      const allLayout = this.state.componentsList.map((componentName, id , components) => {

        const Component = ComponentList[componentName];
        if(typeof Component === 'undefined') {
          return(
            <div key='{id}' className={styles.error}>Can't find {componentName} component!</div>
          );
        }
        return (
            <Component key={Component} />
        );

      });

      return(
        <div className={styles.app}>
          {allLayout}
        </div>
      );
    }
}
export default PageLayout;