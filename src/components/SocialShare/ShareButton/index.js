import React from 'react';
import PropTypes from 'prop-types';
import ShareWindow from '../ShareWindow';
const styles = require('./styles.scss');


const SharingButtonPopup = props => {
  const type = props.type;
  const overrideStyles = props.styles;
  
  return (
    <div className={styles.wrapper + ' ' + styles[`${type}Wrapper`] } onClick={() => { ShareWindow(props)} }>
      {props.icon({ className: 'custom-share-icon-classes' })}
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
