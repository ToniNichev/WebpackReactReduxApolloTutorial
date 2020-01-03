import React from 'react';
import PropTypes from 'prop-types';
import SharingButton from '../ShareButton';
import FacebookIcon from '../Icons/Facebook';
import Tools from '../Tools'

const Facebook = (props) => {
  const link = Tools.getFacebookUrl(props.url);
  let result = SharingButton({type:'facebook', link, icon:FacebookIcon, ...props });
  return result;
}

Facebook.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  windowWidth: PropTypes.number,
  windowHeight: PropTypes.number,
  windowPosition: PropTypes.string,
  onPopupClose: PropTypes.func,
  onClick: PropTypes.func,
}

Facebook.defaultProps = {
  windowWidth:550,
  windowHeight: 400
}

export default Facebook;
