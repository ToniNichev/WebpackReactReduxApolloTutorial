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
      console.log("constructor >>>", url);
      const componentsList = this.getComponentsList(url);
      this.state = {
        url: url,
        componentsList: componentsList,
        components: []
      }
    } 

    componentWillReceiveProps(nextProps) {
      console.log("componentWillReceiveProps");
      const url = nextProps.location.pathname;
      const componentsList = this.getComponentsList(url);
      this.setComponents(componentsList);
      this.setState({ url: url, componentsList: componentsList });
    }
  
    getComponentsList(url) {
      return PagesLayoutData[url];
    }

    setComponents(componentsList) {
      console.log("setComponents >>>>", componentsList);
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

    componentDidMount() {
      console.log("componentDidMount");
      this.setComponents(this.state.componentsList);
    }

    render() {
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