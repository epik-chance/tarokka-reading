import React, { useState } from 'react';
import classNames from 'classnames';

import './selectCard.css'

function SelectCard(props) {

  return (
    <div className={classNames('selectCard', {active: props.active}, props.className)} style={props.style}>
      <div className="selectCardInner">
        <div className="selectCardBack" />  
      </div> 
    </div>
  )
}

export default SelectCard;