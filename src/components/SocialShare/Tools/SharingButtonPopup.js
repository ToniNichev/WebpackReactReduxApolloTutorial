import React from 'react';
import PropTypes from 'prop-types';

const showWindow = (url, title, descr, image, winWidth, winHeight) =>  {
        var winTop = (screen.height / 2) - (winHeight / 2);
        var winLeft = (screen.width / 2) - (winWidth / 2);
        alert(winTop);
        window.open('http://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width='+winWidth+',height='+winHeight);  
}

function windowOpen(url, { height = 400, width = 550, ...configRest }, onClose) {
  alert("!");
  const config = {
    height,
    width,
    location: 'no',
    toolbar: 'no',
    status: 'no',
    directories: 'no',
    menubar: 'no',
    scrollbars: 'yes',
    resizable: 'no',
    centerscreen: 'yes',
    chrome: 'yes',
    ...configRest,
  };

  const shareDialog = window.open(
    url,
    '',
    Object.keys(config).map(key => `${key}=${config[key]}`).join(', '),
  );

  if (onClose) {
    const interval = window.setInterval(() => {
      try {
        if (shareDialog === null || shareDialog.closed) {
          window.clearInterval(interval);
          onClose(shareDialog);
        }
      } catch (e) {
        /* eslint-disable no-console */
        console.error(e);
        /* eslint-enable no-console */
      }
    }, 1000);
  }

  return shareDialog;
}

function openShareWindow() {
    const windowWidth = 550;
    const windowHeight = 400;
    const windowPosition = 'windowCenter';
    const onShareWindowClose = () => {
      alert("!!!!");
    }

    const windowConfig = {
      height: windowHeight,
      width: windowWidth,
      ...(windowPosition === 'windowCenter'
        ? getBoxPositionOnWindowCenter(windowWidth, windowHeight)
        : getBoxPositionOnScreenCenter(windowWidth, windowHeight)
      ),
    };  

    const url = `toni-develops.com`;
    const link = `https://facebook.com/sharer/sharer.php?u=${url}`;

    windowOpen(link, windowConfig, onShareWindowClose);    
}

const getBoxPositionOnWindowCenter = (width, height) => ({
  left: (window.outerWidth / 2)
    + (window.screenX || window.screenLeft || 0) - (width / 2),
  top: (window.outerHeight / 2)
    + (window.screenY || window.screenTop || 0) - (height / 2),
});

const getBoxPositionOnScreenCenter = (width, height) => ({
  top: (window.screen.height - height) / 2,
  left: (window.screen.width - width) / 2,
});

const SharingButtonPopup = props => {

  return (
    <div
      className={`react-sharing-button__link react-sharing-button--${props.type}`}
      href={props.fullUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={openShareWindow}
    >
      {props.icon({ className: 'react-sharing-button__icon' })}
      <span className="react-sharing-button__text">
        {props.text}
      </span>
    </div>
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
