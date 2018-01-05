import React from 'react';
import styles from './cardtiles.css'
import classNames from "classnames";

interface myprops {
  value : any;
  description : string;
  unit : any;
}
const valueFont = classNames('tiles-value');
const unitFont = classNames('tiles-unit');
const descriptionFont = classNames('tiles-description');


export default ( props: myprops ) => {
  var firstChar = props.value.charAt(0);
  var isgreen = firstChar  === '+';
  var isred = firstChar === '-';
  var isblue = !(isgreen | isred);
  var classTyles = classNames('tiles', { 'tiles-font': true, 'tiles-blue': isblue,  'tiles-green': isgreen, 'tiles-red': isred  });  

  return <p className={classTyles}>
    <span className={valueFont}>{props.value}</span><span className={unitFont}>{props.unit}</span><br />
    <span className={descriptionFont}>{props.description}</span>
  </p>
}