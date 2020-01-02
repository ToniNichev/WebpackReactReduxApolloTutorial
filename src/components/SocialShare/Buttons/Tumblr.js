import React from 'react';
import PropTypes from 'prop-types';
import SharingButton from '../ShareButton';
import TumblrIcon from '../Icons/Tumblr';

const Facebook = (props) => {  
  const text = props.text || 'Facebook';
  const url = props.url || window.location.href;
  const title = props.title || 'enter title';
  const caption = props.caption || 'enter caption';
  const content = props.content || 'enter content';
  const link = `https://www.tumblr.com/widgets/share/tool?posttype=link&title=${title}&caption=${caption}&content=${content}&canonicalUrl=${url}&shareSource=tumblr_share_button`;


  return (
    <SharingButton
      type="tumblr"
      link={link}
      onClick={props.onClick}
      icon={TumblrIcon}
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
