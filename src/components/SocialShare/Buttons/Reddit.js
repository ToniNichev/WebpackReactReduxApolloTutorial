import React from 'react';
import PropTypes from 'prop-types';
import SharingButton from '../ShareButton';
import RedditIcon from '../Icons/Reddit';

const Facebook = (props) => {
  const text = props.text || 'Facebook';
  const url = props.url || window.location.href;
  const link = `https://reddit.com/submit/?url=${url}`;
  return (
    <SharingButton
      type="reddit"
      link={link}
      onClick={props.onClick}
      icon={RedditIcon}
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
