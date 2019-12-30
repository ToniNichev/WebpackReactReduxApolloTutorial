import React from 'react';
import styles from './styles.scss';
import Renderer from '../../renderer.js'

const One = () => {
  return (
    <Renderer styles={styles} title="This is Home component, rendered for One brand" />
  )
}

export default One;
