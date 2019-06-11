import React, { Component } from 'react';
//import ComponentList from './ComponentList';
import PagesLayoutData from './pages-layout-data';
//import Loading from '../../components/Loading';

//const header = import('../../components/Header');

const styles = require('./styles.scss');
const isSSR = typeof window === 'undefined' ? true : false;

const ComponentList = {
  Header : 'Header',
  Home: 'Home',
  Greetings: 'Greetings'
}

class PageLayout extends Component {

    constructor(props) {
      super(props);      

      const url = props.location.pathname;
      const componentsList = this.getComponentsList(url);
      this.state = {
        url: url,
        componentsList: componentsList,
        components: []
      }
    } 

    componentWillReceiveProps(nextProps) {
      const url = nextProps.location.pathname;
      const componentsList = this.getComponentsList(url);
      this.state.components = []; // force changing the state right away otherwise react will queue the request and we will end up with duplicate components
      this.setState({ components: [], url: url, componentsList: componentsList });      
      this.setComponents(componentsList);

    }
  
    getComponentsList(url) {
      return PagesLayoutData[url];
    }

    setComponents(componentsList) {
  
      let components = this.state.components;
      componentsList.map((componentName, id , allLomponents) => {
        const componentPath = ComponentList[componentName]; 


        // works on SSR but doesn't split the bundle
        let component = require('../../components/' + componentPath);
        components.push(<component.default key={id} />);
        this.setState({components: components});
        
      });
    }

    componentDidMount() {
      this.setComponents(this.state.componentsList);
    }

    render() {

      if(typeof window == 'undefined')
        this.setComponents(this.state.componentsList);
      const allComponents = this.state.components.map( (component, id, components) => {
        return component;
      });

      return(
        <div className={styles.app}>
          {allComponents}
        </div>
      );
    }
}
export default PageLayout;