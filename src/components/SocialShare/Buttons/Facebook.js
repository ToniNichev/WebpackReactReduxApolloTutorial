import React from 'react';
import PropTypes from 'prop-types';
import SharingButton from '../Tools/SharingButton';
import FacebookIcon from '../Icons/Facebook';

const Facebook = (props) => {
  const text = props.text || 'Facebook';

  return (
    <SharingButton
      type="facebook"
      onClick={props.onClick}
      icon={FacebookIcon}
      text={text}
    />
  )
}

Facebook.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
}

export default Facebook
