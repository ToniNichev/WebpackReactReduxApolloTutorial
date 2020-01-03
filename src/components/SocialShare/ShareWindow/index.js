import React from 'react';
import PropTypes from 'prop-types';

const windowOpen = (url, { height = 400, width = 550, ...configRest }, onClose) => {
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

const getPopupPositionOnWindowCenter = (width, height) => ({
  left: (window.outerWidth / 2)
    + (window.screenX || window.screenLeft || 0) - (width / 2),
  top: (window.outerHeight / 2)
    + (window.screenY || window.screenTop || 0) - (height / 2),
});

const getPopupPositionOnScreenCenter = (width, height) => ({
  top: (window.screen.height - height) / 2,
  left: (window.screen.width - width) / 2,
});


const openShareWindow = props => {  
    const windowWidth = props.windowWidth || 550;
    const windowHeight = props.windowHeight || 400;
    const windowPosition = props.windowPosition || 'windowCenter';
    const onPopupClose = props.onPopupClose || null

    const windowConfig = {
      height: windowHeight,
      width: windowWidth,
      ...(windowPosition === 'windowCenter'
        ? getPopupPositionOnWindowCenter(windowWidth, windowHeight)
        : getPopupPositionOnScreenCenter(windowWidth, windowHeight)
      ),
    };  

    const link = props.link;
    windowOpen(link, windowConfig, onPopupClose);    
}

export default openShareWindow;