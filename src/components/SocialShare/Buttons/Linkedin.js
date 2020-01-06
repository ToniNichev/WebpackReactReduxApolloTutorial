import PropTypes from 'prop-types';
import SharingButton from '../ShareButton';
import LinkedinIcon from '../Icons/Linkedin';
import Tools from '../Tools'

const Linkedin = (props) => {
  const link = Tools.getLinkedinUrl(props.url);
  let result = SharingButton({ id:3, type:'linkedin', link, icon:LinkedinIcon, ...props } );
  return result;
}

Linkedin.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  windowWidth: PropTypes.number,
  windowHeight: PropTypes.number,
  windowPosition: PropTypes.string,
  onPopupClose: PropTypes.func,
  onClick: PropTypes.func,
}

Linkedin.defaultProps = {
  windowWidth:550,
  windowHeight: 400
}

export default Linkedin;
