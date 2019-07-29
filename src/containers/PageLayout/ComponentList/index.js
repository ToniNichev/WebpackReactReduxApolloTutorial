import Loadable from 'react-loadable';
import Loading from '../../../components/Loading';
/* Components */
const Header = Loadable({
  loader: () => import (/* webpackChunkName: "Header" */ '../../../components/Header'),
  loading: Loading
});
const Home = Loadable({
  loader: () => import (/* webpackChunkName: "Home" */ '../../../components/Home'),
  loading: Loading
});
const About = Loadable({
  loader: () => import (/* webpackChunkName: "About" */ '../../../components/About'),
  loading: Loading
});
const Greetings = Loadable({
  loader: () => import (/* webpackChunkName: "Greetings" */ '../../../components/Greetings'),
  loading: Loading
});
const DogsCatalog = Loadable({
  loader: () => import (/* webpackChunkName: "DogsCatalog" */ '../../../containers/DogsCatalog'),
  loading: Loading
});
export default {
  Home: Home,
  About: About,
  Greetings: Greetings,
  DogsCatalogWithRedux: DogsCatalog,
  Header: Header
}
