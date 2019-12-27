import React from 'react';
import PropTypes from 'prop-types';
import SharingButton from '../Tools/SharingButton';
import FacebookIcon from '../Icons/Facebook';

const Facebook = (props) => {
  const text = props.text || 'Facebook';
  const url = props.url || window.location.href;
  const link = `https://facebook.com/sharer/sharer.php?u=${url}`;
  return (
    <SharingButton
      type="facebook"
      link={link}
      onClick={props.onClick}
      icon={FacebookIcon}
      text={text}
      windowWidth="900"
      onPopupClose={() => { console.log("Share Popup Closed!") }}
    />
  )
}

Facebook.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
}

export default Facebook;
