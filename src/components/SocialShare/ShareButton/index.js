import React from 'react';
import PropTypes from 'prop-types';
import ShareWindow from '../ShareWindow';
const styles = require('./styles.scss');


const SharingButtonPopup = props => {
  const type = props.type;
  const overrideStyles = props.styles;
  const onIconClicked = typeof props.onClick == 'undefined' ? () => {ShareWindow(props)} : () => { props.onClick();ShareWindow(props) }
  
  return (
    <div className={styles.wrapper + ' ' + styles[`${type}Wrapper`] } onClick={onIconClicked}>
      {props.icon({ className: styles.customShareIconClasses })}
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
