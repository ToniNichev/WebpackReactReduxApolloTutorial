import React, { Component } from 'react';
import ComponentList from './ComponentList';
import Loading from '../../components/Loading';
import PagesLayoutData from './pages-layout-data';
const styles = require('./styles.scss');
class PageLayout extends Component {
    constructor(props) {
      super(props);      
      const url = props.location.pathname;
      this.state = {
        url: url
      }      
    } 
  
    getComponentsList(url) {
      return PagesLayoutData[url];
    }

    render() {
      const layout = this.getComponentsList(this.state.url);

      if(!layout) {
        return (<Loading />);
      }           


      const allLayout = layout.map((componentName, id , components) => {
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

      return(
        <div className={styles.app}>
          {allLayout}
        </div>
      );
    }
}
export default PageLayout;
