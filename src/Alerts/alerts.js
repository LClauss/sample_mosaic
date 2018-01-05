import React from 'react';
import styles from './cardtiles.css'
import classNames from "classnames";

interface myprops {
  description: any;
  value: any;
}

const bodystyle = classNames('alerts');
const descriptionFonts = classNames('alerts-description');
const valueFonts = classNames('alerts-value');

export default (props: myprops) => <p className={bodystyle}>
  <span className={descriptionFonts}>{props.description}</span>
  <span className={valueFonts}>{props.value}</span>
</p>