import PropTypes from 'prop-types';
import SharingButton from '../ShareButton';
import TumblrIcon from '../Icons/Tumblr';
import Tools from '../Tools'

const Tumblr = (props) => {
  const link = Tools.getTumblrUrl(props.url);
  let result = SharingButton({ id:5, type:'tumblr', link, icon:TumblrIcon, ...props } );
  return result;
}

Tumblr.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  windowWidth: PropTypes.number,
  windowHeight: PropTypes.number,
  windowPosition: PropTypes.string,
  onPopupClose: PropTypes.func,
  onClick: PropTypes.func,
}

Tumblr.defaultProps = {
  windowWidth:550,
  windowHeight: 400
}

export default Tumblr;
