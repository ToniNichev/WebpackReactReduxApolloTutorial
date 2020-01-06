import PropTypes from 'prop-types';
import SharingButton from '../ShareButton';
import RedditIcon from '../Icons/Reddit';
import Tools from '../Tools'

const Reddit = (props) => {
  const link = Tools.getRedditUrl(props.url);
  let result = SharingButton({ id: 4, type:'reddit', link, icon:RedditIcon, ...props } );
  return result;
}

Reddit.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  windowWidth: PropTypes.number,
  windowHeight: PropTypes.number,
  windowPosition: PropTypes.string,
  onPopupClose: PropTypes.func,
  onClick: PropTypes.func,
}

Reddit.defaultProps = {
  windowWidth:550,
  windowHeight: 400
}

export default Reddit;
