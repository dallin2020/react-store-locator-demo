import React from 'react';

export default props => (
  <div
    style={{
      cursor: 'pointer',
      backgroundColor: 'purple',
      height: '25px',
      width: '25px',
      border: '2px solid white'
    }}
    onClick={() => props.handleDealerClick(props.id)}
  >
    {props.children}
  </div>
);
