import React, { Component } from 'react';
import ComponentList from './ComponentList';
import PagesLayoutData from './pages-layout-data';


class PageLayout extends Component {
    constructor(props) {
      super(props);      
    } 
  
    render() {
      const url = this.props.history.location.pathname;
      const pageComponentsList = PagesLayoutData[url];

      debugger;
      const layout = pageComponentsList.map((componentName, id , components) => {
        const Component = ComponentList[componentName];
        return(<Component key={componentName} />);
      });
      
      return(layout);
    }
}

export default PageLayout;