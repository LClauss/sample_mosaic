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
        <span>{props.value}</span>
        <span style={{'fontSize':'18px'}}>{props.unit}</span>
      <br />
      <span style={{ 'fontSize': '20px' }}>
        {props.description}
      </span>
  </p>
  </div>
}

/* <font face="Arial, Helvetica, sans-serif">{props.description}</font> */
/*
return <div className={classTyles}>
  <p className={classTylesFont}>
    <strong>
      <span style={{ 'fontSize': '38px' }}>{props.value}</span>
    </strong>
    <span style={{ 'fontSize': '18px' }}>{props.unit}</span>
    <br />
    <span style={{ 'fontSize': '20px' }}>
      {props.description}
    </span>
  </p>
</div> 
*/