import React from 'react';
import PropTypes from 'prop-types';
import SharingButton from '../Tools/SharingButton';
import TwitterIcon from '../Icons/Twitter';

const findHeadline = () => {
  let headline = document.querySelectorAll('h1').length > 0 ? document.querySelectorAll('h1')[0].innerText : "Enter headline";
  return headline;
}

const Twitter = (props) => {  
  const text = props.text || 'Twitter';
  const url = props.url || window.location.href;
  const shareText = props.shareText || findHeadline();
  const link = `https://twitter.com/intent/tweet/?text=${shareText}&url=${url}`;



  return (
    <SharingButton
      type="twitter"
      link={link}
      onClick={props.onClick}
      icon={TwitterIcon}
      text={text}
      windowWidth="900"
      onPopupClose={() => { console.log("Share Popup Closed!") }}
    />
  )
}

Twitter.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
}

export default Twitter
