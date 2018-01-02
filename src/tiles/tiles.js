import React from 'react';
import styles from './tiles.css'
import classNames from "classnames";

const classTyles = classNames('tiles', { green: true, red: false });
const classTylesFont = classNames('tiles-font');

export default ({ value, unit, description }) => <div className={classTyles}>
  <p className={classTylesFont}>
  <strong><span style={{'font-size':'30px'}}>{value}</span>
  <span style={{'font-size':'14px'}}>{unit}</span></strong>
  <br />
  <span style={{ 'font-size': '16px' }}>
      <font face="Arial, Helvetica, sans-serif">{description}</font>
    </span>
  </p>
  </div>