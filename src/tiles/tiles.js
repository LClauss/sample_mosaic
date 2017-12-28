import React from 'react';
import styles from './tiles.css'
import classNames from "classnames";

var classname = classNames('tiles', { bar: false }); 

export default ({ value, unit }) => <div className={classname}>
<h2><strong>{value}</strong>%</h2></div>