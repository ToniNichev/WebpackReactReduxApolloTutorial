import React, { Component } from 'react';
import ComponentList from './ComponentList';
import PagesLayoutData from './pages-layout-data';
import Loading from '../../components/Loading';

const styles = require('./styles.scss');

class PageLayout extends Component {

    constructor(props) {
      super(props);      

      const url = props.location.pathname;
      const componentsList = this.getComponentsList(url);
      this.state = {
        url: url,
        componentsList: componentsList
      }
    } 


  
    getComponentsList(url) {
      return PagesLayoutData[url];
    }

    render() {
      if(!this.state.componentsList) {
        return (<Loading />);
      }    

      const allLayout = this.state.componentsList.map((componentName, id , components) => {

        const Component = ComponentList[componentName];
        if(typeof Component === 'undefined') {
          return(
            <div key='error-{id}' className={styles.error}>Can't find {componentName} component!</div>
          );
        }

        console.log(">>>>>!!!>>", this.state.url);
        return (
            <Component key={componentName} />
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