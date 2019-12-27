import React from 'react';
import PropTypes from 'prop-types';
import ShareWindow from './ShareWindow';

const SharingButtonPopup = props => {
  return (
    <div onClick={() => { ShareWindow(props)} }>
      {props.icon({ className: 'custom-share-icon-class' })}
      <span className="sharing-btn">
        {props.text}
      </span>
    </div>
  );
}

SharingButtonPopup.propTypes = {
  type: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
  onPopupClose: PropTypes.func,
}

export default SharingButtonPopup
