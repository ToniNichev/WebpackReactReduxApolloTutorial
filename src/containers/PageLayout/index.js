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
      this.setState({components: []});      
      let components = this.state.components;
      componentsList.map((componentName, id , allLomponents) => {
        const componentPath = ComponentList[componentName];


        let component = require('../../components/' + componentPath);
        components.push(<component.default key={id} />);
        this.setState({components: components});


        /*
        import( '../../components/' + componentPath).then( component => {
          let components = this.state.components;
          components.push(<component.default key={id} />);
          this.setState({components: components});
        });
        */       
      });
      console.log(">###########", this.state.components);
    }

    componentDidMount() {
      console.log("componentDidMount");
      this.setComponents(this.state.componentsList);
    }

    render() {

      if(typeof window == 'undefined')
        this.setComponents(this.state.componentsList);
      const allComponents = this.state.components.map( (component, id, components) => {
        return component;
      });

      console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
      console.log(this.state.components);
      return(
        <div className={styles.app}>
          {allComponents}
        </div>
      );
    }
}
export default PageLayout;