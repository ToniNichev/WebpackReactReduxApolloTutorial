import React, { Component } from 'react';
//import ComponentList from './ComponentList';
import PagesLayoutData from './pages-layout-data';
//import Loading from '../../components/Loading';

//const header = import('../../components/Header');

const styles = require('./styles.scss');

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
      console.log("@#@#@#");
      const url = typeof window == 'undefined' ? nextProps.location : nextProps.history.location.pathname;
      const componentsList = this.getComponentsList(url);
      this.setComponents(componentsList);
      this.setState({ url: url, componentsList: componentsList });
    }
  
    getComponentsList(url) {
      return PagesLayoutData[url];
    }

    setComponents(componentsList) {
      componentsList.map((componentName, id , components) => {
        const componentPath = ComponentList[componentName];
        this.setState({components: []});
        import( '../../components/' + componentPath).then( component => {
          let components = this.state.components;
          components.push(<component.default key={id} />);
          this.setState({components: components});
        });       
      });
    }

    componentWillMount() {
      this.setComponents(this.state.componentsList);
    }

    render() {

      /*
      const allLayout = this.state.componentsList.map((componentName, id , components) => {

        let componentPath =  ComponentList[componentName];

        import('../../components/Header').then( Header => {
          return (
            <div key={id}>
              <h1>12345</h1>
              <header.default title="TEST" key={id} />
            </div>              
          );
        });        
      });
      */

     

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