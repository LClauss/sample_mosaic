import React from 'react';
import styles from './tiles.css'
import classNames from "classnames";

const classTylesFont = classNames('tiles-font');

interface myprops {
  value : any;
  description : string;
  value : any;

}

export default ( props: myprops ) => {
  var isgreen = props.value.charAt(0) === '+';
  var isred = props.value.charAt(0) === '-';
  var isblue = !(isgreen | isred);
  var classTyles = classNames('tiles', { blue: isblue,  green: isgreen, red: isred  });  

  return <div className={classTyles}>
  <p className={classTylesFont}>
      <strong><span style={{ 'font-size': '34px' }}>{props.value}</span>
  <span style={{'font-size':'14px'}}>{props.unit}</span></strong>
  <br />
  <span style={{ 'font-size': '16px' }}>
      <font face="Arial, Helvetica, sans-serif">{props.description}</font>
    </span>
  </p>
  </div>
}
