import React from 'react';
import PropTypes from 'prop-types';
import SharingButton from '../ShareButton';
import FacebookIcon from '../Icons/Facebook';

const Facebook = (props) => {
  const text = typeof props.text === 'undefined' ? 'Facebook' : props.text;
  const url = props.url || window.location.href;
  const link = `https://facebook.com/sharer/sharer.php?u=${url}`;
  const popupClose = typeof props.popupCloded === 'undefined' ? () => {} : props.popupCloded;
  return (
    <SharingButton
      type="facebook"
      link={link}
      onClick={props.onClick}
      icon={FacebookIcon}
      text={text}
      windowWidth="900"
      onPopupClose={() => {popupClose()} }
    />
  )
}

Facebook.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
}

export default Facebook;
