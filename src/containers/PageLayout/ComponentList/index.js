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
const Greetings = Loadable({
  loader: () => import ('../../../components/Greetings'),
  loading: Loading
});
export default {
  Home: Home,
  Greetings: Greetings,
  Header: Header
}
