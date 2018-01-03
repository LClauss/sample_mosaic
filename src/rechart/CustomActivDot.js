import React from 'react';

export default ({ cx, cy, stroke, payload, value }) =>
  <svg x={cx - 16} y={cy - 16} width={32} height={32} fill="red" viewBox="0 0 32 32">
    <circle stroke="#D1E5FF" strokeWidth={1} fill="#4C88CA" cx='16' cy='16' r='8' />
    <circle fill="#FFFFFE" cx='16' cy='16' r='4' />
  </svg>;

