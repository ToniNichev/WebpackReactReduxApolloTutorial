import React from 'react';
import PropTypes from 'prop-types';
import SharingButton from '../Tools/SharingButton';
import LinkedinIcon from '../Icons/Linkedin';


const Facebook = (props) => {
  const text = props.text || 'Linkedin';
  const url = props.url || window.location.href;
  const link = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  return (
    <SharingButton
      type="linkedin"
      link={link}
      onClick={props.onClick}
      icon={LinkedinIcon}
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
