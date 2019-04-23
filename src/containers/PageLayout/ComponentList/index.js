import Loadable from 'react-loadable';
import Loading from '../../../components/Loading';
/* Components */
const Header = Loadable({
  loader: () => import ('../../../components/Header'),
  loading: Loading
});
const Home = Loadable({
  loader: () => import ('../../../components/Home'),
  loading: Loading
});
const About = Loadable({
  loader: () => import ('../../../components/About'),
  loading: Loading
});
const Greetings = Loadable({
  loader: () => import ('../../../components/Greetings'),
  loading: Loading
});
const DogsCatalog = Loadable({
  loader: () => import ('../../../containers/DogsCatalog'),
  loading: Loading
});
export default {
  Home: Home,
  About: About,
  Greetings: Greetings,
  DogsCatalogWithRedux: DogsCatalog,
  Header: Header
}
