import React from 'react';
import PropTypes from 'prop-types';
import ShareWindow from '../ShareWindow';

const styles = require('./styles.scss');

console.log("styles", styles);

const SharingButton = ( {index, type, ...props} ) => {
  const ShareWindowAction = type === 'email' ? () => { window.location.href = props.link; } : () => { ShareWindow(props) };
  const onIconClicked = typeof props.onClick == 'undefined' ? () => {ShareWindowAction(props)} : () => { props.onClick();ShareWindowAction(props) }
  const overrideClassName = type.toLowerCase();
  const overrideClass = typeof styles[`${overrideClassName}Wrapper`] === 'undefined' ? '' : styles[`${overrideClassName}Wrapper`];
  
  return (
    <div role="button" key={type} tabIndex={index} className={`${styles.wrapper} ${overrideClass}`} onClick={onIconClicked}>      
      {props.icon({ className: styles.customShareIconClasses })}
      <div className={styles.sharingBtn}>
        {props.text}
      </div>
    </div>
  );
}

SharingButton.propTypes = {
  index: PropTypes.number.isRequired,  
  type: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
  onPopupClose: PropTypes.func,
}

export default SharingButton
