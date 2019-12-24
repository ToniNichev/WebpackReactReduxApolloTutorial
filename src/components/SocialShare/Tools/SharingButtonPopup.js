import React from 'react'
import PropTypes from 'prop-types'

const SharingButtonPopup = props => {

showWindow =  {
  (url, title, descr, image, winWidth, winHeight) {
        var winTop = (screen.height / 2) - (winHeight / 2);
        var winLeft = (screen.width / 2) - (winWidth / 2);
        window.open('http://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width='+winWidth+',height='+winHeight);
    }  
}

  return (
    <a
      className={`react-sharing-button__link react-sharing-button--${props.type}`}
      href={props.fullUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={showWindow}
    >
      {props.icon({ className: 'react-sharing-button__icon' })}
      <span className="react-sharing-button__text">
        {props.text}
      </span>
    </a>
  )
}


SharingButtonPopup.propTypes = {
  type: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  fullUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default SharingButtonPopup
