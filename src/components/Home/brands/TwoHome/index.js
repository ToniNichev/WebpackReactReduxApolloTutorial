import React from 'react';
import styles from './styles.scss';
import Renderer from '../../renderer.js'

const Two = () => {
  return (
    <Renderer styles={styles} title="I'm rendered for Two brand" />
  )
}

export default Two;
