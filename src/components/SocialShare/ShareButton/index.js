import React from 'react';
import PropTypes from 'prop-types';
import ShareWindow from '../ShareWindow';
const styles = require('./styles.scss');


const SharingButtonPopup = props => {
  const type = props.type;
  const overrideStyles = props.styles;
  const ShareWindowAction = props.type === 'Email' ? () => { window.location.href = props.link; } : () => ShareWindow(props);
  const onIconClicked = typeof props.onClick == 'undefined' ? () => {ShareWindowAction(props)} : () => { props.onClick();ShareWindowAction(props) }
  
  const overrideClass = typeof styles[`${type}Wrapper`] == 'undefined' ? '' : styles[`${type}Wrapper`];
  return (
    <div className={styles.wrapper + ' ' + overrideClass } onClick={onIconClicked}>
      {props.icon({ className: styles.customShareIconClasses })}
      <div className="sharing-btn">
        {props.text}
      </div>
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
