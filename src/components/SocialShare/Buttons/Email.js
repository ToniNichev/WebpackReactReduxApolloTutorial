import PropTypes from 'prop-types';
import SharingButton from '../ShareButton';
import EmailIcon from '../Icons/Email';
import Tools from '../Tools'

const Email = (props) => {
  const link = Tools.getEmailUrl(props.url);
  let result = SharingButton( { id:6, type:'email', link, icon:EmailIcon, ...props } );
  return result;
}

Email.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  windowWidth: PropTypes.number,
  windowHeight: PropTypes.number,
  windowPosition: PropTypes.string,
  onPopupClose: PropTypes.func,
  onClick: PropTypes.func,
}

Email.defaultProps = {
  windowWidth:550,
  windowHeight: 400
}

export default Email;
