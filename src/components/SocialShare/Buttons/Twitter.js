import PropTypes from 'prop-types';
import SharingButton from '../ShareButton';
import TwitterIcon from '../Icons/Twitter';
import Tools from '../Tools'

const Twitter = (props) => {
  const link = Tools.getTwitterUrl(props.shareText, props.url);
  let result = SharingButton( { id:2, type:'twitter', link, icon:TwitterIcon, ...props } );
  return result;
}

Twitter.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  windowWidth: PropTypes.number,
  windowHeight: PropTypes.number,
  windowPosition: PropTypes.string,
  onPopupClose: PropTypes.func,
  onClick: PropTypes.func,
}

Twitter.defaultProps = {
  windowWidth:550,
  windowHeight: 400
}

export default Twitter;
