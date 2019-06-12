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
          // splits the bundle but doesn't render components on SSR since 'import' is asynchronous and by the time the
          // promise is fulfilled the component is already rendered on the SSR.
          import( '../../components/' + componentPath).then( component => {
            let components = this.state.components;
            components.push(<component.default key={`wrapper-${id}`} />);
            this.setState({components: components});
          });

        
      });
    }

    componentDidMount() {
      this.setComponents(this.state.componentsList);
    }

    render() {
      const allComponents = this.state.components.map( (component) => {
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