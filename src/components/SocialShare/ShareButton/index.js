import React from 'react';
import PropTypes from 'prop-types';
import ShareWindow from '../ShareWindow';

const styles = require('./styles.scss');

console.log("styles", styles);

const SharingButton = ( {index, type,icon, link, ...props} ) => {
  const ShareWindowAction = type === 'email' ? () => { window.location.href = link; } : () => { ShareWindow( { link, ...props } ) };
  const onIconClicked = typeof props.onClick == 'undefined' ? () => { ShareWindowAction() } : () => { props.onClick();ShareWindowAction() }
  const overrideClass = typeof styles[`${type}Wrapper`] === 'undefined' ? '' : styles[`${type}Wrapper`];
  return (
    <div role="button" key={type} tabIndex={index} className={`${styles.wrapper} ${overrideClass}`} onClick={onIconClicked}>      
      {icon({ className: styles.customShareIconClasses })}
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
