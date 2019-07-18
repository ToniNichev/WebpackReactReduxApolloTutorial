import Loadable from 'react-loadable';
import Loading from '../../../components/Loading';
/* Components */
const Header = Loadable({
  loader: () => import (/* webpackChunkName: "Header" */ '../../../components/Header'),
  loading: () => Loading
});
const Home = Loadable({
  loader: () => import (/* webpackChunkName: "Home" */ '../../../components/Home'),
  loading: () => Loading
});
const Greetings = Loadable({
  loader: () => import (/* webpackChunkName: "Greetings" */ '../../../components/Greetings'),
  loading: () => Loading
});
export default {
  Home: Home,
  Greetings: Greetings,
  Header: Header
}
