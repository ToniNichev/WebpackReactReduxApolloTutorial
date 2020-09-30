import React from 'react';
import styles from './styles.scss';
import { ThemeContextConsumer } from "../../themeContext";

function Label(props) {
  return(
    <ThemeContextConsumer>
      {context => (
        <div className={styles.wrapper}>
            <h2>{context.theme}</h2>
        </div>
      )}
    </ThemeContextConsumer>
    );     
}

Label.contextType = ThemeContextConsumer;

export default Label;